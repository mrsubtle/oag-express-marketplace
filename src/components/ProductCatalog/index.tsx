"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sdk } from "@/lib/sdk";
import { HttpTypes } from "@medusajs/types";
import { useRegion } from "@/providers/region";
import { Search } from "lucide-react";

interface ProductCatalogProps {
  onProductSelect: (productHandle: string) => void;
  searchPlaceholder?: string;
  showSearch?: boolean;
  showCategories?: boolean;
  productsPerPage?: number;
}

export const ProductCatalog = ({
  onProductSelect,
  searchPlaceholder = "Search products...",
  showSearch = true,
  showCategories = true,
  productsPerPage = 12,
}: ProductCatalogProps) => {
  const { region } = useRegion();
  const [products, setProducts] = useState<HttpTypes.StoreProduct[]>([]);
  const [categories, setCategories] = useState<
    HttpTypes.StoreProductCategory[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [committedSearchQuery, setCommittedSearchQuery] = useState(""); // new: only run search when user requests
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      if (!showCategories) return;

      try {
        const { product_categories } = await sdk.store.category.list({
          fields: "id,name,handle,description",
        });
        setCategories(product_categories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, [showCategories]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      if (!region) return;

      try {
        setLoading(true);
        setError(null);

        const searchParams: any = {
          limit: productsPerPage,
          offset: (currentPage - 1) * productsPerPage,
          fields:
            "id,title,handle,description,thumbnail,status,created_at,updated_at",
          region_id: region.id,
        };

        // Add search query if provided
        if (committedSearchQuery.trim()) {
          searchParams.q = committedSearchQuery.trim();
        }

        // Add category filter if selected
        if (selectedCategory) {
          searchParams.category_id = [selectedCategory];
        }

        const { products: fetchedProducts, count } =
          await sdk.store.product.list(searchParams);

        if (currentPage === 1) {
          setProducts(fetchedProducts);
        } else {
          setProducts((prev) => [...prev, ...fetchedProducts]);
        }

        // Check if there are more products to load
        setHasMore(
          fetchedProducts.length === productsPerPage &&
            currentPage * productsPerPage < count,
        );
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    region,
    committedSearchQuery,
    selectedCategory,
    currentPage,
    productsPerPage,
  ]);

  const handleSearchInputChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearch = () => {
    setCommittedSearchQuery(searchQuery);
    setCurrentPage(1);
    setProducts([]);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setProducts([]);
  };

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const formatPrice = (
    variants: HttpTypes.StoreProductVariant[] | undefined | null,
  ) => {
    if (!variants || variants.length === 0) return "Price unavailable";

    const firstVariant = variants[0];
    if (
      !firstVariant.calculated_price ||
      !firstVariant.calculated_price.calculated_amount
    )
      return "Price unavailable";

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: firstVariant.calculated_price.currency_code || "CAD",
    }).format(firstVariant.calculated_price.calculated_amount / 100);
  };

  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error && products.length === 0) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-red-800 font-medium mb-2">
          Error Loading Products
        </h3>
        <p className="text-red-600">{error}</p>
        <Button
          onClick={() => window.location.reload()}
          className="mt-4"
          variant="secondary"
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        {/* <h1 className="text-2xl font-bold text-foreground">
          Catalog
        </h1> */}

        {/* Search */}
        {showSearch && (
          <div className="flex gap-2">
            <Input
              type="search"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearchInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="flex-1"
            />
            <Button
              type="button"
              variant="default"
              onClick={handleSearch}
              aria-label="Search"
              size="icon"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Categories */}
        {showCategories && categories.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground font-manrope">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "secondary"}
                size="sm"
                onClick={() => handleCategorySelect(null)}
              >
                All Products
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "secondary"
                  }
                  size="sm"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results info */}
      {(committedSearchQuery || selectedCategory) && (
        <div className="text-sm text-gray-600">
          {committedSearchQuery && `Results for "${committedSearchQuery}"`}
          {committedSearchQuery && selectedCategory && " in "}
          {selectedCategory &&
            categories.find((c) => c.id === selectedCategory)?.name}
          {products.length > 0 && ` (${products.length} products)`}
        </div>
      )}

      {/* Product Grid */}
      {products.length === 0 && !loading ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2 font-manrope">
            No products found
          </h3>
          <p className="text-muted-foreground">
            {committedSearchQuery || selectedCategory
              ? "Try adjusting your search or filters"
              : "No products are available at the moment"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col flex-1 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onProductSelect(product.handle)}
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-100">
                {product.thumbnail ? (
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="flex-1 font-medium text-foreground mb-2 line-clamp-2 font-manrope">
                  {product.title}
                </h3>
                {/* {product.description && (
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )} */}
                <div className="flex flex-col flex-1 gap-6 items-start justify-start">
                  <span className="text-lg font-semibold">
                    {formatPrice(product.variants)}
                  </span>
                  <Button
                    size="sm"
                    className="w-full shadow-[0_2px_16px_rgba(0,0,0,0.15)]"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && !loading && (
        <div className="text-center">
          <Button onClick={loadMore} variant="secondary">
            Load More Products
          </Button>
        </div>
      )}

      {/* Loading more indicator */}
      {loading && products.length > 0 && (
        <div className="text-center py-4">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      )}
    </div>
  );
};
