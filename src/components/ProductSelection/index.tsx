"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useCart } from "@/providers/cart";
import { useRegion } from "@/providers/region";
import { sdk } from "@/lib/sdk";
import { HttpTypes } from "@medusajs/types";

interface ProductSelectionProps {
  productHandle: string;
  onContinue: () => void;
}

export const ProductSelection = ({
  productHandle,
  onContinue,
}: ProductSelectionProps) => {
  const [product, setProduct] = useState<HttpTypes.StoreProduct | null>(null);
  const [selectedVariant, setSelectedVariant] =
    useState<HttpTypes.StoreProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { addToCart, cart } = useCart();
  const { region } = useRegion();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // First, search for the product by handle
        const { products } = await sdk.store.product.list({
          handle: productHandle,
          fields: "id,title,handle,description,thumbnail,status,created_at,updated_at",
          region_id: region?.id,
        });

        if (!products || products.length === 0) {
          throw new Error(`Product with handle "${productHandle}" not found`);
        }

        const foundProduct = products[0];

        // Now fetch the full product details with variants
        const { product: productData } = await sdk.store.product.retrieve(
          foundProduct.id,
          {
            fields:
              "+variants.*,+variants.options.*,+variants.options.option.*",
          },
        );

        setProduct(productData);

        // Set the first available variant as default
        if (productData.variants && productData.variants.length > 0) {
          setSelectedVariant(productData.variants[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (productHandle && region) {
      fetchProduct();
    }
  }, [productHandle, region]);

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      setError("Please select a product variant");
      return;
    }

    if (quantity < 1) {
      setError("Quantity must be at least 1");
      return;
    }

    try {
      setAddingToCart(true);
      setError(null);

      await addToCart(selectedVariant.id, quantity);
      onContinue();
    } catch (err) {
      console.error("Error adding to cart:", err);
      setError("Failed to add product to cart");
    } finally {
      setAddingToCart(false);
    }
  };

  const formatPrice = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(amount / 100); // Medusa prices are in cents
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-red-800 font-medium mb-2">Error Loading Product</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-yellow-800 font-medium mb-2">Product Not Found</h3>
        <p className="text-yellow-600">
          The requested product could not be found.
        </p>
      </div>
    );
  }

  const currentProductInCart = cart?.items?.find(
    (item) => item.variant?.product?.handle === productHandle,
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-manrope">
            {product.title}
          </h1>
          {product.description && (
            <p className="text-muted-foreground mt-2">{product.description}</p>
          )}
        </div>

        {product.thumbnail && (
          <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {product.variants && product.variants.length > 1 && (
          <div className="space-y-2">
            <Label htmlFor="variant-select">Select Variant</Label>
            <Select
              value={selectedVariant?.id || ""}
              onValueChange={(value) => {
                const variant = product.variants?.find((v) => v.id === value);
                setSelectedVariant(variant || null);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a variant" />
              </SelectTrigger>
              <SelectContent>
                {product.variants.map((variant) => (
                  <SelectItem key={variant.id} value={variant.id}>
                    <div className="flex justify-between items-center w-full">
                      <span>{variant.title}</span>
                      {variant.calculated_price && (
                        <span className="ml-2 font-medium">
                          {formatPrice(
                            variant.calculated_price.calculated_amount || 0,
                            variant.calculated_price.currency_code || "CAD",
                          )}
                        </span>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            max={selectedVariant?.inventory_quantity || 99}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-24"
          />
          {selectedVariant?.inventory_quantity !== undefined && (
            <p className="text-sm text-gray-500">
              {selectedVariant.inventory_quantity} available
            </p>
          )}
        </div>

        {selectedVariant?.calculated_price && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Price:</span>
              <span className="text-2xl font-bold text-green-600">
                {formatPrice(
                  (selectedVariant.calculated_price.calculated_amount || 0) *
                    quantity,
                  selectedVariant.calculated_price.currency_code || "CAD",
                )}
              </span>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {currentProductInCart && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700">
            ✓ This product is already in your cart (
            {currentProductInCart.quantity} items)
          </p>
        </div>
      )}

      <div className="flex gap-4">
        <Button
          onClick={handleAddToCart}
          disabled={!selectedVariant || addingToCart || quantity < 1}
          className="flex-1"
          size="lg"
        >
          {addingToCart
            ? "Adding to Cart..."
            : currentProductInCart
              ? "Update Cart"
              : "Add to Cart"}
        </Button>

        {currentProductInCart && (
          <Button
            onClick={onContinue}
            variant="secondary"
            className="flex-1"
            size="lg"
          >
            Continue to Checkout
          </Button>
        )}
      </div>
    </div>
  );
};
