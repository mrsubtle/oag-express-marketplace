"use client";

import { clx } from "@medusajs/ui";
import { RegionProvider, useRegion } from "@/providers/region";
import { CartProvider, useCart } from "@/providers/cart";
import { navigateToProduct } from "@/lib/routing";
import { formatPrice } from "@/lib/price-utils";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

function LayoutContent({ children, className }: LayoutProps) {
  const { cart, removeItem } = useCart();
  const { region, regions, setRegion } = useRegion();

  const handleCheckout = () => {
    // Navigate to the first product in the cart to start checkout
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      const productHandle = firstProduct.variant?.product?.handle;
      if (productHandle) {
        navigateToProduct(productHandle, "address");
      }
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      await removeItem(itemId);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const cartItemsCount = cart?.items?.length || 0;
  const cartTotal = cart?.total || 0;

  return (
    <div className="flex flex-1 flex-col gap-2 pb-4">
      {/* Cart Trigger */}
      {cartItemsCount > 0 && (
        <div className="flex justify-end mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <Badge variant="secondary" className="ml-1">
                  {cartItemsCount}
                </Badge>
                <span className="ml-1">
                  {formatPrice(cartTotal, cart?.currency_code || "CAD")}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Cart Summary</SheetTitle>
              </SheetHeader>

              {/* Cart Items */}
              <div className="mt-6 space-y-3">
                {cart?.items?.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 group">
                    {item.variant?.product?.thumbnail && (
                      <img
                        src={item.variant.product.thumbnail}
                        alt={item.variant.product.title || "Product"}
                        className="w-16 h-16 object-cover rounded-md bg-gray-100"
                        style={{
                          width: 4 * 16,
                          height: 4 * 16,
                          backgroundSize: "cover",
                        }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium truncate font-manrope">
                            {item.variant?.product?.title}
                          </h4>
                          {item.variant?.title && (
                            <p className="text-xs text-gray-500">
                              {item.variant.title}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            color: "red",
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </span>
                        <span className="text-sm font-medium">
                          {formatPrice(
                            item.subtotal ||
                              item.total ||
                              (item.unit_price || 0) * item.quantity,
                            cart.currency_code,
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>
                    {cart?.subtotal !== undefined &&
                      formatPrice(cart.subtotal, cart.currency_code)}
                  </span>
                </div>

                {cart?.shipping_total !== undefined &&
                  cart.shipping_total > 0 && (
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>
                        {formatPrice(cart.shipping_total, cart.currency_code)}
                      </span>
                    </div>
                  )}

                {cart?.tax_total !== undefined && cart.tax_total > 0 && (
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>
                      {formatPrice(cart.tax_total, cart.currency_code)}
                    </span>
                  </div>
                )}

                <div className="border-t pt-2 flex justify-between font-medium">
                  <span>Total:</span>
                  <span>
                    {cart?.total !== undefined &&
                      formatPrice(cart.total, cart.currency_code)}
                  </span>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  className="w-full mt-4"
                  size="sm"
                >
                  Checkout
                </Button>
              </div>

              {/* Region Selector */}
              <div className="mt-6 border-t pt-4">
                <h4 className="font-medium mb-3 font-manrope">Settings</h4>
                <div className="space-y-2">
                  <span className="text-sm text-gray-600">Region:</span>
                  <select
                    value={region?.id || ""}
                    onChange={(e) => {
                      const selectedRegion = regions.find(
                        (r) => r.id === e.target.value,
                      );
                      setRegion(selectedRegion);
                    }}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Region</option>
                    {regions.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Branding */}
              <div className="mt-6 text-center space-y-2">
                <span className="text-xs text-gray-500">Powered by</span>
                <img
                  src="https://opticag.com/img/brand/OAG_Logo_f_dark.svg"
                  alt="OpticAg"
                  width={32}
                  height={19}
                  className="mx-auto"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col gap-2">{children}</div>
    </div>
  );
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={clx("font-inter bg-ui-bg-subtle", className)}>
      <div className={clx("flex justify-center items-start")}>
        <RegionProvider>
          <CartProvider>
            <LayoutContent className={className}>{children}</LayoutContent>
          </CartProvider>
        </RegionProvider>
      </div>
    </div>
  );
}
