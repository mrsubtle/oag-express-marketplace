"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/providers/cart";
import { sdk } from "@/lib/sdk";
import { formatPrice } from "@/lib/price-utils";
import { HttpTypes } from "@medusajs/types";

interface ShippingOptionsProps {
  onContinue: () => void;
  onBack: () => void;
}

export const ShippingOptions = ({
  onContinue,
  onBack,
}: ShippingOptionsProps) => {
  const { cart, updateCart } = useCart();
  const [shippingOptions, setShippingOptions] = useState<any[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShippingOptions = async () => {
      if (!cart?.id) {
        setError("No cart found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { shipping_options } =
          await sdk.store.fulfillment.listCartOptions({
            cart_id: cart.id,
          });

        setShippingOptions(shipping_options);

        // Set currently selected shipping method if any
        if (cart.shipping_methods && cart.shipping_methods.length > 0) {
          setSelectedOptionId(
            cart.shipping_methods[0].shipping_option_id || "",
          );
        }
      } catch (err) {
        console.error("Error fetching shipping options:", err);
        setError("Failed to load shipping options");
      } finally {
        setLoading(false);
      }
    };

    fetchShippingOptions();
  }, [cart?.id]);


  const handleContinue = async () => {
    if (!selectedOptionId) {
      setError("Please select a shipping method");
      return;
    }

    if (!cart?.id) {
      setError("No cart found");
      return;
    }

    try {
      setSaving(true);
      setError(null);

      await updateCart({
        shippingMethodData: {
          option_id: selectedOptionId,
        },
      });

      onContinue();
    } catch (err) {
      console.error("Error saving shipping method:", err);
      setError("Failed to save shipping method");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading shipping options...</p>
        </div>
      </div>
    );
  }

  if (error && shippingOptions.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Shipping Options</h2>
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-medium mb-2">
            Error Loading Shipping Options
          </h3>
          <p className="text-red-600">{error}</p>
        </div>
        <div className="flex gap-4">
          <Button onClick={onBack} variant="secondary" className="flex-1">
            Back to Address
          </Button>
        </div>
      </div>
    );
  }

  if (shippingOptions.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Shipping Options</h2>
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-yellow-800 font-medium mb-2">
            No Shipping Options Available
          </h3>
          <p className="text-yellow-600">
            No shipping options are available for your address. Please check
            your address or contact support.
          </p>
        </div>
        <div className="flex gap-4">
          <Button onClick={onBack} variant="secondary" className="flex-1">
            Back to Address
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold font-manrope">
        Choose Shipping Method
      </h2>

      <div className="space-y-4">
        <RadioGroup
          value={selectedOptionId}
          onValueChange={setSelectedOptionId}
          className="space-y-3"
        >
          {shippingOptions.map((option) => (
            <div
              key={option.id}
              className={`relative border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedOptionId === option.id
                  ? "border-primary bg-accent"
                  : "border-border hover:border-muted-foreground"
              }`}
              onClick={() => setSelectedOptionId(option.id)}
            >
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="absolute top-4 right-4"
              />

              <div className="pr-10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-foreground font-manrope">
                      {option.name}
                    </h3>
                    {option.data?.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {String(option.data.description)}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      {option.calculated_price &&
                      option.calculated_price.calculated_amount
                        ? formatPrice(
                            option.calculated_price.calculated_amount,
                            option.calculated_price.currency_code || "CAD",
                          )
                        : "Free"}
                    </p>
                  </div>
                </div>

                {/* Delivery time estimate if available */}
                {option.data?.estimated_delivery && (
                  <p className="text-sm text-muted-foreground">
                    Estimated delivery: {String(option.data.estimated_delivery)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Cart summary */}
      {cart && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium mb-2 font-manrope">Order Summary</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>
                {cart.subtotal !== undefined &&
                  formatPrice(cart.subtotal, cart.currency_code)}
              </span>
            </div>
            {selectedOptionId && (
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>
                  {(() => {
                    const selectedOption = shippingOptions.find(
                      (opt) => opt.id === selectedOptionId,
                    );
                    return selectedOption?.calculated_price &&
                      selectedOption.calculated_price.calculated_amount
                      ? formatPrice(
                          selectedOption.calculated_price.calculated_amount,
                          selectedOption.calculated_price.currency_code ||
                            "CAD",
                        )
                      : "Free";
                  })()}
                </span>
              </div>
            )}
            <div className="border-t pt-1 flex justify-between font-medium">
              <span>Total:</span>
              <span>
                {cart.total !== undefined &&
                  formatPrice(cart.total, cart.currency_code)}
              </span>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <div className="flex gap-4">
        <Button
          onClick={onBack}
          variant="secondary"
          className="flex-1"
          disabled={saving}
        >
          Back to Address
        </Button>

        <Button
          onClick={handleContinue}
          className="flex-1"
          disabled={!selectedOptionId || saving}
        >
          {saving ? "Saving..." : "Continue to Payment"}
        </Button>
      </div>
    </div>
  );
};
