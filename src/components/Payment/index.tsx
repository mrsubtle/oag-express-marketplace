"use client";

/**
 * Payment Component for MedusaJS v2
 *
 * This component handles payment processing for MedusaJS v2 storefronts.
 *
 * Key Points:
 * 1. No explicit payment session authorization is required for basic flows
 * 2. The SDK handles payment authorization automatically during cart completion
 * 3. For production environments, implement payment collection forms (e.g., Stripe Elements)
 * 4. Test mode providers (like pp_stripe_stripe) are auto-authorized
 *
 * Previous Issue:
 * - Direct fetch() calls to authorize payment sessions caused CORS issues
 * - Explicit authorization is not required for most payment providers in test mode
 *
 * Current Solution:
 * - Initialize payment session with selected provider
 * - Complete cart directly - MedusaJS handles authorization internally
 * - Provide clear error messages if additional authorization is needed
 */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/providers/cart";
import { useRegion } from "@/providers/region";
import { useStorefront } from "@/providers/storefront";
import { sdk } from "@/lib/sdk";
import { formatPrice } from "@/lib/price-utils";
import { HttpTypes } from "@medusajs/types";
import { StripePayment } from "@/components/StripePayment";

interface PaymentProps {
  onBack: () => void;
  onComplete?: (order: HttpTypes.StoreOrder) => void;
  stripePublishableKey?: string; // Optional Stripe publishable key
}

// Helper function to get display name for payment provider
const getPaymentProviderDisplayName = (
  provider: HttpTypes.StorePaymentProvider,
  index: number,
): string => {
  const id = provider.id.toLowerCase();

  // Specific ID mappings based on actual MedusaJS provider IDs
  if (id === "pp_stripe_stripe") return "Credit/Debit Card";
  if (id === "pp_system_default") return "Manual Payment";

  // General pattern matching for other providers
  if (id.includes("stripe")) return "Credit/Debit Card";
  if (id.includes("paypal")) return "PayPal";
  if (id.includes("apple")) return "Apple Pay";
  if (id.includes("google")) return "Google Pay";
  if (id.includes("manual") || id.includes("system")) return "Manual Payment";

  // Clean up ID for display - remove pp_ prefix and format nicely
  return id
    .replace(/^pp_/, "")
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Helper function to get description for payment provider
const getPaymentProviderDescription = (
  provider: HttpTypes.StorePaymentProvider,
  index: number,
): string => {
  const id = provider.id.toLowerCase();

  // Specific ID mappings based on actual MedusaJS provider IDs
  if (id === "pp_stripe_stripe")
    return "Pay securely with your credit or debit card via Stripe";
  if (id === "pp_system_default")
    return "Manual payment processing (for testing)";

  // General pattern matching for other providers
  if (id.includes("stripe"))
    return "Pay securely with your credit or debit card via Stripe";
  if (id.includes("paypal")) return "Pay with your PayPal account";
  if (id.includes("apple")) return "Pay with Touch ID or Face ID";
  if (id.includes("google")) return "Pay with Google Pay";
  if (id.includes("manual") || id.includes("system"))
    return "Manual payment processing (for testing)";

  return "Secure payment processing";
};

export const Payment = ({ onBack, onComplete, stripePublishableKey }: PaymentProps) => {
  const { cart, unsetCart } = useCart();
  const { region } = useRegion();
  const { backendUrl, publishableKey } = useStorefront();
  const [paymentProviders, setPaymentProviders] = useState<
    HttpTypes.StorePaymentProvider[]
  >([]);
  const [selectedProviderId, setSelectedProviderId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [paymentCollection, setPaymentCollection] = useState<any>(null);
  const [activePaymentSession, setActivePaymentSession] = useState<any>(null);
  const [showStripeForm, setShowStripeForm] = useState(false);

  useEffect(() => {
    const fetchPaymentProviders = async () => {
      if (!cart?.id) {
        setError("No cart found");
        setLoading(false);
        return;
      }

      if (!region?.id) {
        setError("No region selected");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { payment_providers } =
          await sdk.store.payment.listPaymentProviders({
            region_id: region.id,
          });

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
  }, [cart?.id, region?.id]);

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
      setPaymentStatus("Initializing payment...");

      // Step 1: Initialize payment session with selected provider
      console.log(
        "Initializing payment session for provider:",
        selectedProviderId,
      );
      const paymentCollectionResponse =
        await sdk.store.payment.initiatePaymentSession(cart, {
          provider_id: selectedProviderId,
        });

      if (!paymentCollectionResponse.payment_collection) {
        throw new Error("Failed to initialize payment session");
      }

      const paymentCollection = paymentCollectionResponse.payment_collection;
      console.log("Payment collection created:", paymentCollection.id);
      setPaymentCollection(paymentCollection);

      // Step 2: Find the payment session for our provider
      const paymentSession = paymentCollection.payment_sessions?.find(
        (session: any) => session.provider_id === selectedProviderId,
      );

      if (!paymentSession) {
        throw new Error(
          `Payment session not found for provider: ${selectedProviderId}`,
        );
      }

      console.log("Payment session found:", paymentSession.id);
      setActivePaymentSession(paymentSession);

      // Step 3: Handle different payment providers
      if (selectedProviderId.includes("stripe")) {
        console.log("Using Stripe payment session:", paymentSession.id);
        // Show Stripe Elements form for card collection
        setShowStripeForm(true);
        setProcessing(false); // Let Stripe component handle processing
        return;
      } else if (selectedProviderId === "pp_system_default") {
        console.log("Using system default payment:", paymentSession.id);
        // System default payment is for testing/manual processing
        // Proceed directly to cart completion
      }

      // Step 4: Complete the cart for non-Stripe providers
      await completeCartOrder();

    } catch (err: any) {
      console.error("Error initializing payment:", err);
      handlePaymentError(err);
    } finally {
      if (!selectedProviderId.includes("stripe")) {
        setProcessing(false);
      }
    }
  };

  const completeCartOrder = async () => {
    if (!cart?.id) {
      throw new Error("No cart found");
    }

    setPaymentStatus("Creating order...");
    console.log("Completing cart:", cart.id);
    const completeResponse = await sdk.store.cart.complete(cart.id);

    if (completeResponse.type !== "order") {
      const errorMessage =
        completeResponse.type === "cart" && completeResponse.error
          ? completeResponse.error.message
          : "Failed to create order from cart";

      if (
        errorMessage.toLowerCase().includes("payment") ||
        errorMessage.toLowerCase().includes("authoriz")
      ) {
        throw new Error(
          `Payment authorization required: ${errorMessage}. For production environments, you may need to implement additional payment authorization steps.`,
        );
      }

      throw new Error(errorMessage);
    }

    if (!completeResponse.order) {
      throw new Error("Order not found in completion response");
    }

    const order = completeResponse.order;
    setPaymentStatus("Order completed successfully!");

    // Clear the cart from storage
    unsetCart();

    // Call completion callback
    if (onComplete) {
      onComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
    }
  };

  const handlePaymentError = (err: any) => {
    setProcessing(false);
    
    if (err.response?.status === 400) {
      setError(
        "Invalid payment information. Please check your details and try again.",
      );
    } else if (err.response?.status === 402) {
      setError(
        "Payment declined. Please check your payment method and try again.",
      );
    } else if (err.response?.status === 404) {
      setError("Cart not found. Please refresh the page and try again.");
    } else if (err.response?.status === 409) {
      setError("Cart has been modified. Please refresh and try again.");
    } else if (
      err.message?.toLowerCase().includes("payment") ||
      err.message?.toLowerCase().includes("authoriz")
    ) {
      setError(
        "Payment authorization failed. For production environments, you may need to implement additional payment authorization steps. Please check your payment provider configuration.",
      );
    } else if (err.message?.toLowerCase().includes("inventory")) {
      setError(
        "Some items in your cart are no longer available. Please refresh and try again.",
      );
    } else if (err.message?.toLowerCase().includes("session")) {
      setError("Payment session expired. Please try again.");
    } else if (err.message?.toLowerCase().includes("network")) {
      setError("Network error. Please check your connection and try again.");
    } else {
      setError(
        err.message ||
          "Failed to complete order. Please try again or contact support.",
      );
    }
  };

  const handleStripeComplete = (order: HttpTypes.StoreOrder) => {
    setShowStripeForm(false);
    setPaymentStatus("Order completed successfully!");
    
    if (onComplete) {
      onComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
    }
  };

  const handleStripeError = (errorMessage: string) => {
    setShowStripeForm(false);
    setError(errorMessage);
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
          <h3 className="text-red-800 font-medium mb-2">
            Error Loading Payment Options
          </h3>
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
          <h3 className="text-yellow-800 font-medium mb-2">
            No Payment Methods Available
          </h3>
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
                  {item.variant?.product?.title}{" "}
                  {item.variant?.title && `(${item.variant.title})`} ×{" "}
                  {item.quantity}
                </span>
                <span>{formatPrice(item.total || 0, cart.currency_code)}</span>
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
                <span>{formatPrice(cart.tax_total, cart.currency_code)}</span>
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
          {paymentProviders.map((provider, index) => (
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
                <h3 className="font-medium text-foreground font-manrope">
                  {getPaymentProviderDisplayName(provider, index)}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {getPaymentProviderDescription(provider, index)}
                </p>

                {/* Show additional info for card-supporting providers */}
                {(provider.id.includes("stripe") ||
                  provider.id.includes("paypal") ||
                  provider.id.startsWith("pp_")) && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-1">
                      <div className="w-8 h-5 bg-gray-300 rounded text-white text-xs flex items-center justify-center font-bold">
                        Visa
                      </div>
                      <div className="w-8 h-5 bg-gray-300 rounded text-white text-xs flex items-center justify-center font-bold">
                        MC
                      </div>
                      <div className="w-8 h-5 bg-gray-300 rounded text-white text-xs flex items-center justify-center font-bold">
                        AE
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      and more
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Stripe Payment Form */}
      {showStripeForm && activePaymentSession && (
        <div className="space-y-4">
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Enter Payment Details</h3>
            <StripePayment
              paymentSession={activePaymentSession}
              onComplete={handleStripeComplete}
              onError={handleStripeError}
              stripePublishableKey={stripePublishableKey}
            />
          </div>
        </div>
      )}

      {/* Payment Security Notice */}
      {!showStripeForm && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                Your payment information is processed securely. We do not store
                your payment details.
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {paymentStatus && !error && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            {processing && (
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3"></div>
            )}
            <p className="text-blue-700">{paymentStatus}</p>
          </div>
        </div>
      )}

      {/* Action Buttons - Hidden when Stripe form is showing */}
      {!showStripeForm && (
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
            {processing
              ? "Processing..."
              : selectedProviderId.includes("stripe")
              ? "Continue to Payment"
              : `Complete Order (${
                  cart?.total !== undefined
                    ? formatPrice(cart.total, cart.currency_code)
                    : "..."
                })`}
          </Button>
        </div>
      )}

      {/* Back Button for Stripe Form */}
      {showStripeForm && (
        <div className="flex gap-4">
          <Button
            onClick={() => {
              setShowStripeForm(false);
              setActivePaymentSession(null);
              setPaymentCollection(null);
              setError(null);
            }}
            variant="secondary"
            className="flex-1"
          >
            Back to Payment Methods
          </Button>
        </div>
      )}
    </div>
  );
};
