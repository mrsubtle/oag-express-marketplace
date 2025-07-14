import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/providers/cart";
import { sdk } from "@/lib/sdk";
import { HttpTypes } from "@medusajs/types";

interface PaymentProps {
  onBack: () => void;
  onComplete?: (order: HttpTypes.StoreOrder) => void;
}

export const Payment = ({ onBack, onComplete }: PaymentProps) => {
  const { cart, unsetCart } = useCart();
  const [paymentProviders, setPaymentProviders] = useState<HttpTypes.StorePaymentProvider[]>([]);
  const [selectedProviderId, setSelectedProviderId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentProviders = async () => {
      if (!cart?.id) {
        setError("No cart found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { payment_providers } = await sdk.store.payment.listPaymentProviders();
        setPaymentProviders(payment_providers);

        // Auto-select first provider if only one available
        if (payment_providers.length === 1) {
          setSelectedProviderId(payment_providers[0].id);
        }
      } catch (err) {
        console.error("Error fetching payment providers:", err);
        setError("Failed to load payment methods");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentProviders();
  }, [cart?.id]);

  const formatPrice = (amount: number, currencyCode: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(amount / 100);
  };

  const handleCompleteOrder = async () => {
    if (!selectedProviderId) {
      setError("Please select a payment method");
      return;
    }

    if (!cart?.id) {
      setError("No cart found");
      return;
    }

    try {
      setProcessing(true);
      setError(null);

      // In a real implementation, you would handle payment processing here
      // For now, we'll simulate a successful payment by completing the cart
      const completeResponse = await sdk.store.cart.complete(cart.id);
      const order = completeResponse.type === "order" ? completeResponse.order : null;
      
      if (!order) {
        throw new Error("Failed to create order");
      }

      // Clear the cart from storage
      unsetCart();

      // Call completion callback
      if (onComplete) {
        onComplete(order);
      } else {
        // Default success message
        alert(`Order completed successfully! Order ID: ${order.id}`);
      }
    } catch (err) {
      console.error("Error completing order:", err);
      setError("Failed to complete order. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment options...</p>
        </div>
      </div>
    );
  }

  if (error && paymentProviders.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Payment</h2>
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-medium mb-2">Error Loading Payment Options</h3>
          <p className="text-red-600">{error}</p>
        </div>
        <div className="flex gap-4">
          <Button onClick={onBack} variant="secondary" className="flex-1">
            Back to Shipping
          </Button>
        </div>
      </div>
    );
  }

  if (paymentProviders.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Payment</h2>
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-yellow-800 font-medium mb-2">No Payment Methods Available</h3>
          <p className="text-yellow-600">
            No payment methods are currently available. Please contact support.
          </p>
        </div>
        <div className="flex gap-4">
          <Button onClick={onBack} variant="secondary" className="flex-1">
            Back to Shipping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold font-manrope">Payment Method</h2>

      {/* Order Summary */}
      {cart && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium mb-4 font-manrope">Order Summary</h3>
          
          {/* Cart Items */}
          <div className="space-y-2 mb-4">
            {cart.items?.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.variant?.product?.title} {item.variant?.title && `(${item.variant.title})`} × {item.quantity}
                </span>
                <span>
                  {formatPrice(item.total || 0, cart.currency_code)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-1 text-sm border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>
                {cart.subtotal !== undefined &&
                  formatPrice(cart.subtotal, cart.currency_code)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>
                {cart.shipping_total !== undefined
                  ? formatPrice(cart.shipping_total, cart.currency_code)
                  : "Free"}
              </span>
            </div>
            {cart.tax_total !== undefined && cart.tax_total > 0 && (
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>
                  {formatPrice(cart.tax_total, cart.currency_code)}
                </span>
              </div>
            )}
            <div className="border-t pt-2 flex justify-between font-medium text-base">
              <span>Total:</span>
              <span>
                {cart.total !== undefined &&
                  formatPrice(cart.total, cart.currency_code)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods */}
      <div className="space-y-4">
        <Label>Select Payment Method</Label>
        <RadioGroup
          value={selectedProviderId}
          onValueChange={setSelectedProviderId}
          className="space-y-3"
        >
          {paymentProviders.map((provider) => (
            <div
              key={provider.id}
              className={`relative border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedProviderId === provider.id
                  ? "border-primary bg-accent"
                  : "border-border hover:border-muted-foreground"
              }`}
              onClick={() => setSelectedProviderId(provider.id)}
            >
              <RadioGroupItem
                value={provider.id}
                id={provider.id}
                className="absolute top-4 right-4"
              />
              
              <div className="pr-10">
                <h3 className="font-medium text-foreground font-manrope">{provider.id}</h3>
                {/* You can customize this based on your payment providers */}
                <p className="text-sm text-muted-foreground mt-1">
                  {provider.id === "stripe" && "Pay securely with Stripe"}
                  {provider.id === "paypal" && "Pay with PayPal"}
                  {provider.id === "manual" && "Manual payment (for testing)"}
                  {!["stripe", "paypal", "manual"].includes(provider.id) && 
                    `Pay with ${provider.id}`}
                </p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Payment Security Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Your payment information is processed securely. We do not store your payment details.
            </p>
          </div>
        </div>
      </div>

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
          disabled={processing}
        >
          Back to Shipping
        </Button>
        
        <Button
          onClick={handleCompleteOrder}
          className="flex-1"
          disabled={!selectedProviderId || processing}
        >
          {processing ? "Processing..." : `Complete Order (${
            cart?.total !== undefined 
              ? formatPrice(cart.total, cart.currency_code)
              : "..."
          })`}
        </Button>
      </div>
    </div>
  );
};