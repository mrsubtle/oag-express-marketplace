"use client";

import { clx } from "@medusajs/ui";
import { useRegion } from "@/providers/region";
import { useCart } from "@/providers/cart";
import { formatPrice } from "@/lib/price-utils";

export const SecondCol = () => {
  const { region, regions, setRegion } = useRegion();
  const { cart } = useCart();


  return (
    <div className={clx("flex flex-0 flex-col gap-6", "w-xs")}>
      {/* Cart Summary */}
      {cart && cart.items && cart.items.length > 0 && (
        <div className="bg-white rounded-lg border p-4 space-y-4">
          <h3 className="font-medium text-lg font-manrope">Cart Summary</h3>

          {/* Cart Items */}
          <div className="space-y-3">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                {item.variant?.product?.thumbnail && (
                  <img
                    src={item.variant.product.thumbnail}
                    alt={item.variant.product.title || "Product"}
                    className="w-16 h-16 object-cover rounded-md bg-gray-100"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium truncate font-manrope">
                    {item.variant?.product?.title}
                  </h4>
                  {item.variant?.title && (
                    <p className="text-xs text-gray-500">
                      {item.variant.title}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </span>
                    <span className="text-sm font-medium">
                      {formatPrice(item.total || 0, cart.currency_code)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>
                {cart.subtotal !== undefined &&
                  formatPrice(cart.subtotal, cart.currency_code)}
              </span>
            </div>

            {cart.shipping_total !== undefined && cart.shipping_total > 0 && (
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>
                  {formatPrice(cart.shipping_total, cart.currency_code)}
                </span>
              </div>
            )}

            {cart.tax_total !== undefined && cart.tax_total > 0 && (
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>{formatPrice(cart.tax_total, cart.currency_code)}</span>
              </div>
            )}

            <div className="border-t pt-2 flex justify-between font-medium">
              <span>Total:</span>
              <span>
                {cart.total !== undefined &&
                  formatPrice(cart.total, cart.currency_code)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Region Selector */}
      <div className="bg-white rounded-lg border p-4 space-y-3">
        <h3 className="font-medium font-manrope">Settings</h3>
        <div className="space-y-2">
          <span className="text-sm text-ui-fg-muted">Region:</span>
          <select
            value={region?.id || ""}
            onChange={(e) => {
              const selectedRegion = regions.find(
                (r) => r.id === e.target.value,
              );
              setRegion(selectedRegion);
            }}
            className="w-full p-2 text-sm border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <div className="text-center space-y-2">
        <span className="text-xs text-ui-fg-subtle">Powered by</span>
        {/* TODO: Update to OAG Logo */}
        <img
          src="https://opticag.com/img/brand/OAG_Logo_f_dark.svg"
          alt="OpticAg"
          width={32}
          height={19}
          className="mx-auto"
        />
      </div>
    </div>
  );
};
