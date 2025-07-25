"use client";

import { useRouter, useSearchParams, buildUrl } from "@/lib/routing";
import { useCart } from "@/providers/cart";
import { useEffect, useMemo } from "react";

type ActiveTab = "product" | "address" | "shipping" | "payment";

type RouterProps = {
  handle: string;
};

export const Router = ({ handle }: RouterProps) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentStep = searchParams.get("step");

  const isCartValid = useMemo(() => {
    return cart?.items?.[0]?.product_handle === handle;
  }, [cart, handle]);

  const activeTab: ActiveTab =
    currentStep === "product" ||
    currentStep === "address" ||
    currentStep === "shipping" ||
    currentStep === "payment"
      ? currentStep
      : "product";

  useEffect(() => {
    if (!cart) {
      return;
    }

    if (activeTab !== "product" && !isCartValid) {
      return router.push(`/${handle}`);
    }

    if (
      activeTab === "shipping" &&
      (!cart?.shipping_address || !cart?.billing_address)
    ) {
      return router.push(buildUrl(`/${handle}`, { step: "address" }));
    }

    if (
      activeTab === "payment" &&
      (!cart?.shipping_address ||
        !cart?.billing_address ||
        !cart?.shipping_methods?.length)
    ) {
      return router.push(buildUrl(`/${handle}`, { step: "shipping" }));
    }
  }, [isCartValid, activeTab, cart, handle, router]);

  return <>{/* TODO render components */}</>;
};
