"use client";

import { useEffect, useState } from "react";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ExpressCheckout } from "@/components/ExpressCheckout";
import {
  getMarketplaceView,
  getProductHandle,
  navigateToProduct,
  navigateToCatalog,
} from "@/lib/routing";
import { HttpTypes } from "@medusajs/types";
import { Button } from "@/components/ui/button";

interface MarketplaceProps {
  /**
   * Initial view mode - can be overridden by URL
   */
  initialView?: "catalog" | "product";

  /**
   * Initial product handle if starting in product view
   */
  initialProductHandle?: string;

  /**
   * Callback when order is completed
   */
  onOrderComplete?: (order: HttpTypes.StoreOrder) => void;

  /**
   * Customization options for catalog
   */
  catalogOptions?: {
    searchPlaceholder?: string;
    showSearch?: boolean;
    showCategories?: boolean;
    productsPerPage?: number;
  };

  /**
   * Custom header content
   */
  headerContent?: React.ReactNode;
}

export const Marketplace = ({
  initialView = "catalog",
  initialProductHandle,
  onOrderComplete,
  catalogOptions = {},
  headerContent,
}: MarketplaceProps) => {
  const [currentView, setCurrentView] = useState<"catalog" | "product">(
    "catalog",
  );
  const [currentProductHandle, setCurrentProductHandle] = useState<string>("");

  // Initialize view and product handle from URL or props
  useEffect(() => {
    const urlView = getMarketplaceView();
    const urlProductHandle = getProductHandle();

    // Priority: URL > initial props
    const view = urlView !== "catalog" ? urlView : initialView;
    const productHandle = urlProductHandle || initialProductHandle || "";

    setCurrentView(view);
    setCurrentProductHandle(productHandle);
  }, [initialView, initialProductHandle]);

  // Listen for route changes
  useEffect(() => {
    const handleRouteChange = () => {
      const view = getMarketplaceView();
      const productHandle = getProductHandle() || "";

      setCurrentView(view);
      setCurrentProductHandle(productHandle);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("routechange", handleRouteChange);
      window.addEventListener("popstate", handleRouteChange);

      return () => {
        window.removeEventListener("routechange", handleRouteChange);
        window.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, []);

  const handleProductSelect = (productHandle: string) => {
    navigateToProduct(productHandle);
  };

  const handleBackToCatalog = () => {
    navigateToCatalog();
  };

  const handleOrderComplete = (order: HttpTypes.StoreOrder) => {
    if (onOrderComplete) {
      onOrderComplete(order);
    } else {
      // Default: show success and return to catalog
      alert(`Order completed successfully! Order ID: ${order.id}`);
      handleBackToCatalog();
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "catalog":
        return (
          <ProductCatalog
            onProductSelect={handleProductSelect}
            searchPlaceholder={catalogOptions.searchPlaceholder}
            showSearch={catalogOptions.showSearch}
            showCategories={catalogOptions.showCategories}
            productsPerPage={catalogOptions.productsPerPage}
          />
        );

      case "product":
        if (!currentProductHandle) {
          return (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 font-manrope">
                Product Not Found
              </h3>
              <p className="text-muted-foreground mb-4">
                The requested product could not be found.
              </p>
              <Button onClick={handleBackToCatalog}>Browse Products</Button>
            </div>
          );
        }

        return (
          <div className="space-y-4">
            {/* Back to catalog button */}
            <div className="flex items-center gap-2 pb-4 border-b">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleBackToCatalog}
                className="flex items-center gap-2"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Catalog
              </Button>
              <span className="text-sm text-gray-500">
                Product: {currentProductHandle}
              </span>
            </div>

            <ExpressCheckout
              productHandle={currentProductHandle}
              onOrderComplete={handleOrderComplete}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {headerContent && <div className="">{headerContent}</div>}

      {renderContent()}
    </div>
  );
};
