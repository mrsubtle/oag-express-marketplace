import { useEffect, useState } from "react";
import { Button, Input } from "@medusajs/ui";
import { sdk } from "@/lib/sdk";
import { HttpTypes } from "@medusajs/types";
import { useRegion } from "@/providers/region";

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
  const [categories, setCategories] = useState<HttpTypes.StoreProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
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
          fields: "id,title,handle,description,thumbnail,status,created_at,updated_at",
          region_id: region.id,
        };

        // Add search query if provided
        if (searchQuery.trim()) {
          searchParams.q = searchQuery.trim();
        }

        // Add category filter if selected
        if (selectedCategory) {
          searchParams.category_id = [selectedCategory];
        }

        const { products: fetchedProducts, count } = await sdk.store.product.list(searchParams);

        if (currentPage === 1) {
          setProducts(fetchedProducts);
        } else {
          setProducts(prev => [...prev, ...fetchedProducts]);
        }

        // Check if there are more products to load
        setHasMore(fetchedProducts.length === productsPerPage && (currentPage * productsPerPage) < count);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [region, searchQuery, selectedCategory, currentPage, productsPerPage]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setProducts([]);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setProducts([]);
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const formatPrice = (variants: HttpTypes.StoreProductVariant[] | undefined) => {
    if (!variants || variants.length === 0) return "Price unavailable";
    
    const firstVariant = variants[0];
    if (!firstVariant.calculated_price) return "Price unavailable";

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: firstVariant.calculated_price.currency_code,
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
        <h3 className="text-red-800 font-medium mb-2">Error Loading Products</h3>
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
        <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
        
        {/* Search */}
        {showSearch && (
          <div className="relative">
            <Input
              type="search"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}

        {/* Categories */}
        {showCategories && categories.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "primary" : "secondary"}
                size="small"
                onClick={() => handleCategorySelect(null)}
              >
                All Products
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "primary" : "secondary"}
                  size="small"
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
      {(searchQuery || selectedCategory) && (
        <div className="text-sm text-gray-600">
          {searchQuery && `Results for "${searchQuery}"`}
          {searchQuery && selectedCategory && " in "}
          {selectedCategory && categories.find(c => c.id === selectedCategory)?.name}
          {products.length > 0 && ` (${products.length} products)`}
        </div>
      )}

      {/* Product Grid */}
      {products.length === 0 && !loading ? (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">
            {searchQuery || selectedCategory
              ? "Try adjusting your search or filters"
              : "No products are available at the moment"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
                    <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                {product.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-green-600">
                    {formatPrice(product.variants)}
                  </span>
                  <Button size="small">
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