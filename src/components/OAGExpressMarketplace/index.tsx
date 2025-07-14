"use client";

import Layout from "@/components/Layout";
import { Marketplace } from "@/components/Marketplace";
import { FontProvider } from "@/providers/fonts";
import { H1, H2, P } from "@/components/ui/typography";
import { getProductHandle, getMarketplaceView } from "@/lib/routing";
import { updateSDKConfig } from "@/lib/sdk";
import { useEffect, useState } from "react";
import { HttpTypes } from "@medusajs/types";

interface OAGExpressMarketplaceProps {
  /**
   * Base URL for the MedusaJS backend
   */
  backendUrl: string;

  /**
   * MedusaJS publishable key
   */
  publishableKey: string;
  /**
   * The product handle/slug to display if starting in product view
   * If not provided, will start with catalog or extract from URL
   */
  productHandle?: string;

  /**
   * Optional className for custom styling
   */
  className?: string;

  /**
   * Callback when order is completed
   */
  onOrderComplete?: (order: HttpTypes.StoreOrder) => void;

  /**
   * Initial view mode - defaults to catalog for full marketplace experience
   */
  initialView?: "catalog" | "product";

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
   * Marketplace title
   */
  title?: string;

  /**
   * Font family for brand elements (headers, titles). Falls back to fontUi if not specified.
   */
  fontBrand?: string;

  /**
   * Font family for UI elements. Used everywhere except headers/titles when fontBrand is specified.
   */
  fontUi?: string;
}

export const OAGExpressMarketplace = ({
  backendUrl,
  publishableKey,
  productHandle,
  className,
  onOrderComplete,
  initialView = "catalog",
  catalogOptions,
  title = "OpticAg Marketplace",
  fontBrand,
  fontUi,
}: OAGExpressMarketplaceProps) => {
  const [isConfigured, setIsConfigured] = useState(false);

  // Configure SDK if backend URL or publishable key provided
  useEffect(() => {
    if (backendUrl || publishableKey) {
      updateSDKConfig({
        backendUrl,
        publishableKey,
      });
    }
    setIsConfigured(true);
  }, [backendUrl, publishableKey]);

  if (!isConfigured) {
    return (
      <FontProvider fontBrand={fontBrand} fontUi={fontUi}>
        <Layout className={className}>
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <H2 className="text-xl font-semibold text-muted-foreground mb-2">
                Initializing Marketplace...
              </H2>
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </Layout>
      </FontProvider>
    );
  }

  const defaultHeaderContent = (
    <div className="">
      <H1 className="text-3xl font-bold text-foreground">{title}</H1>
    </div>
  );

  return (
    <FontProvider fontBrand={fontBrand} fontUi={fontUi}>
      <Layout className={className}>
        <Marketplace
          initialView={initialView}
          initialProductHandle={productHandle}
          onOrderComplete={onOrderComplete}
          catalogOptions={catalogOptions}
        />
      </Layout>
    </FontProvider>
  );
};

export default OAGExpressMarketplace;
