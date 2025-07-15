"use client";

import {
  useRouter,
  useSearchParams,
  buildUrl,
  navigateToProduct,
} from "@/lib/routing";
import { useCart } from "@/providers/cart";
import { useEffect, useMemo, useState } from "react";
import { ProductSelection } from "@/components/ProductSelection";
import { AddressForm } from "@/components/AddressForm";
import { ShippingOptions } from "@/components/ShippingOptions";
import { Payment } from "@/components/Payment";
import { HttpTypes } from "@medusajs/types";
import { clx } from "@medusajs/ui";

type CheckoutStep = "product" | "address" | "shipping" | "payment";

interface ExpressCheckoutProps {
  productHandle: string;
  onOrderComplete?: (order: HttpTypes.StoreOrder) => void;
}

export const ExpressCheckout = ({
  productHandle,
  onOrderComplete,
}: ExpressCheckoutProps) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const currentStep = searchParams.get("step") as CheckoutStep;
  console.log("ExpressCheckout - currentStep from URL:", currentStep);

  const isCartValid = useMemo(() => {
    return (
      cart?.items &&
      cart.items.length > 0 &&
      cart.items.some((item) => item.variant?.product?.handle === productHandle)
    );
  }, [cart, productHandle]);

  const activeStep: CheckoutStep =
    currentStep === "product" ||
    currentStep === "address" ||
    currentStep === "shipping" ||
    currentStep === "payment"
      ? currentStep
      : "product";

  console.log("ExpressCheckout - activeStep:", activeStep);

  // Navigation handler for moving between steps
  const navigateToStep = (step: CheckoutStep) => {
    console.log("ExpressCheckout navigateToStep called with:", step);
    if (isLoading) {
      console.log("Navigation blocked - already loading");
      return; // Prevent rapid navigation
    }

    setIsLoading(true);
    setTimeout(() => {
      console.log("Executing navigation to step:", step);
      if (step === "product") {
        navigateToProduct(productHandle);
      } else {
        navigateToProduct(productHandle, step);
      }
      setIsLoading(false);
    }, 100); // Small delay to prevent rapid navigation loops
  };

  // Validation and routing logic
  useEffect(() => {
    if (!cart || isLoading) {
      return;
    }

    // If we're not on the product step and the cart is invalid, redirect to product
    if (activeStep !== "product" && !isCartValid) {
      navigateToStep("product");
      return;
    }

    // If we're on shipping step but missing address info, redirect to address
    if (
      activeStep === "shipping" &&
      (!cart?.shipping_address || !cart?.billing_address)
    ) {
      navigateToStep("address");
      return;
    }

    // If we're on payment step but missing required info, redirect appropriately
    if (activeStep === "payment") {
      if (!cart?.shipping_address || !cart?.billing_address) {
        navigateToStep("address");
        return;
      }
      if (!cart?.shipping_methods?.length) {
        navigateToStep("shipping");
        return;
      }
    }
  }, [
    isCartValid,
    activeStep,
    cart?.shipping_address,
    cart?.billing_address,
    cart?.shipping_methods,
    productHandle,
    isLoading,
  ]);

  const handleOrderComplete = (order: HttpTypes.StoreOrder) => {
    if (onOrderComplete) {
      onOrderComplete(order);
    } else {
      // Default behavior - show success message and reset to product step
      alert(`Order completed successfully! Order ID: ${order.id}`);
      navigateToStep("product");
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case "product":
        return (
          <ProductSelection
            productHandle={productHandle}
            onContinue={() => navigateToStep("address")}
          />
        );

      case "address":
        return (
          <AddressForm
            onContinue={() => navigateToStep("shipping")}
            onBack={() => navigateToStep("product")}
          />
        );

      case "shipping":
        return (
          <ShippingOptions
            onContinue={() => navigateToStep("payment")}
            onBack={() => navigateToStep("address")}
          />
        );

      case "payment":
        return (
          <Payment
            onBack={() => navigateToStep("shipping")}
            onComplete={handleOrderComplete}
          />
        );

      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    const steps = ["product", "address", "shipping", "payment"] as const;
    const stepNames = {
      product: "Product",
      address: "Address",
      shipping: "Shipping",
      payment: "Payment",
    };

    return (
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: 24 }}
      >
        {steps.map((step, index) => {
          const isActive = step === activeStep;
          const isCompleted = steps.indexOf(activeStep) > index;

          return (
            <div
              key={step}
              className={clx(
                "flex",
                index == steps.length - 1 ? "flex-0" : "flex-1",
                "items-center justify-between",
              )}
            >
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${
                    isActive
                      ? "bg-gray-100 text-black font-bold"
                      : isCompleted
                        ? "bg-gray-100 text-gray-500"
                        : "bg-white border border-gray-500 text-gray-500"
                  }
                `}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <span
                className={`p-2 text-sm ${isActive ? "font-bold border-gray-800" : "font-light"}`}
              >
                {stepNames[step]}
              </span>
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-gray-300 mx-4" />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {renderStepIndicator()}
      {renderStepContent()}
    </div>
  );
};
