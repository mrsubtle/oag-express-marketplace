"use client";

/**
 * Stripe Payment Component for MedusaJS v2
 *
 * Implements Stripe Elements for secure card payment collection
 * Following MedusaJS v2 Stripe integration guide:
 * https://docs.medusajs.com/resources/storefront-development/checkout/payment/stripe
 */

import { useState, useEffect } from "react";
import { loadStripe, Stripe, StripeElements } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/cart";
import { useStorefront } from "@/providers/storefront";
import { sdk } from "@/lib/sdk";
import { HttpTypes } from "@medusajs/types";

interface StripePaymentProps {
  paymentSession: any; // Payment session from MedusaJS
  onComplete: (order: HttpTypes.StoreOrder) => void;
  onError: (error: string) => void;
  stripePublishableKey?: string; // Optional Stripe publishable key
}

// Get Stripe publishable key from props or environment
const getStripePublishableKey = (providedKey?: string): string => {
  // Use provided key first, then fall back to environment variables
  if (providedKey) {
    return providedKey;
  }

  // Try different environment variable patterns
  if (typeof window !== "undefined") {
    // Client-side environment variables
    return (
      process.env.NEXT_PUBLIC_STRIPE_PK || process.env.REACT_APP_STRIPE_PK || ""
    );
  }
  return "";
};

const StripePaymentForm = ({
  paymentSession,
  onComplete,
  onError,
  stripePublishableKey,
}: StripePaymentProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, unsetCart } = useCart();
  const [processing, setProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!stripe || !elements || !cart) {
      onError("Stripe not loaded or cart not found");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      onError("Card element not found");
      return;
    }

    try {
      setProcessing(true);
      setPaymentStatus("Processing payment...");

      // Debug logging for payment session
      console.log("Payment Session:", paymentSession);
      console.log("Payment Session Data:", paymentSession.data);
      console.log("Client Secret:", paymentSession.data?.client_secret);

      // Confirm the card payment using Stripe
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(paymentSession.data.client_secret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name:
                cart.billing_address?.first_name &&
                cart.billing_address?.last_name
                  ? `${cart.billing_address.first_name} ${cart.billing_address.last_name}`
                  : "Customer",
              email: cart.email || undefined,
              address: cart.billing_address
                ? {
                    line1: cart.billing_address.address_1 || undefined,
                    line2: cart.billing_address.address_2 || undefined,
                    city: cart.billing_address.city || undefined,
                    state: cart.billing_address.province || undefined,
                    postal_code: cart.billing_address.postal_code || undefined,
                    country: cart.billing_address.country_code || undefined,
                  }
                : undefined,
            },
          },
        });

      if (stripeError) {
        throw new Error(stripeError.message || "Payment failed");
      }

      // Debug logging for payment intent
      console.log("Payment Intent:", paymentIntent);
      console.log("Payment Intent Status:", paymentIntent?.status);
      console.log("Payment Intent ID:", paymentIntent?.id);

      // In MedusaJS, both "succeeded" and "requires_capture" are valid successful statuses
      // "requires_capture" means authorization succeeded, funds will be captured later
      // "succeeded" means payment was immediately captured
      if (paymentIntent?.status !== "succeeded" && paymentIntent?.status !== "requires_capture") {
        throw new Error(`Payment was not successful. Status: ${paymentIntent?.status}`);
      }

      setPaymentStatus("Creating order...");

      // Complete the cart to create the order
      const completeResponse = await sdk.store.cart.complete(cart.id);

      if (completeResponse.type !== "order") {
        const errorMessage =
          completeResponse.type === "cart" && completeResponse.error
            ? completeResponse.error.message
            : "Failed to create order from cart";
        throw new Error(errorMessage);
      }

      if (!completeResponse.order) {
        throw new Error("Order not found in completion response");
      }

      // Clear the cart and complete the order
      unsetCart();
      onComplete(completeResponse.order);
    } catch (err: any) {
      console.error("Stripe payment error:", err);
      onError(err.message || "Payment failed. Please try again.");
    } finally {
      setProcessing(false);
      setPaymentStatus(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Card Element */}
      <div className="space-y-3">
        <div className="text-sm text-gray-600">
          <p>Enter your card details below. Use your postal code or ZIP code for the postal field.</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg">
          <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
              },
              invalid: {
                color: "#9e2146",
              },
            },
            hidePostalCode: false,
          }}
        />
        </div>
      </div>

      {/* Payment Status */}
      {paymentStatus && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            {processing && (
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3"></div>
            )}
            <p className="text-blue-700">{paymentStatus}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        onClick={handlePayment}
        disabled={!stripe || processing}
        className="w-full"
      >
        {processing
          ? "Processing Payment..."
          : `Pay ${
              cart?.total !== undefined
                ? new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: cart.currency_code || "CAD",
                  }).format(cart.total)
                : "..."
            }`}
      </Button>

      {/* Security Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-600">
              Your payment is secured by Stripe. Your card details are never
              stored on our servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StripePayment = ({
  paymentSession,
  onComplete,
  onError,
  stripePublishableKey,
}: StripePaymentProps) => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [stripeKey, setStripeKey] = useState<string>("");

  useEffect(() => {
    // Get Stripe publishable key
    const key = getStripePublishableKey(stripePublishableKey);

    if (!key) {
      onError(
        "Stripe publishable key not found. Please provide stripePublishableKey prop or set NEXT_PUBLIC_STRIPE_PK environment variable.",
      );
      return;
    }

    setStripeKey(key);
    setStripePromise(loadStripe(key));
  }, [onError, stripePublishableKey]);

  if (!stripePromise || !stripeKey) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Stripe...</p>
        </div>
      </div>
    );
  }

  const elementOptions = {
    mode: "payment" as const,
    amount: paymentSession.amount,
    currency: paymentSession.currency_code || "cad",
    // Add locale to support international postal codes (including Canadian format)
    locale: "en" as const,
    appearance: {
      theme: "stripe" as const,
      variables: {
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSizeBase: "16px",
        colorPrimary: "#0070f3",
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={elementOptions}>
      <StripePaymentForm
        paymentSession={paymentSession}
        onComplete={onComplete}
        onError={onError}
      />
    </Elements>
  );
};
