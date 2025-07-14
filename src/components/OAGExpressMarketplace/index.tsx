"use client";

import Layout from "@/components/Layout";
import { Marketplace } from "@/components/Marketplace";
import { getProductHandle, getMarketplaceView } from "@/lib/routing";
import { updateSDKConfig } from "@/lib/sdk";
import { useEffect, useState } from "react";
import { HttpTypes } from "@medusajs/types";

interface OAGExpressMarketplaceProps {
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
   * Base URL for the MedusaJS backend
   */
  backendUrl?: string;
  
  /**
   * MedusaJS publishable key
   */
  publishableKey?: string;
  
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
   * Custom header content
   */
  headerContent?: React.ReactNode;
  
  /**
   * Marketplace title
   */
  title?: string;
}

export const OAGExpressMarketplace = ({ 
  productHandle,
  className,
  backendUrl,
  publishableKey,
  onOrderComplete,
  initialView = "catalog",
  catalogOptions,
  headerContent,
  title = "OpticAg Marketplace"
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
      <Layout className={className}>
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-muted-foreground mb-2 font-manrope">
              Initializing Marketplace...
            </h2>
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </Layout>
    );
  }

  const defaultHeaderContent = (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-foreground font-manrope">{title}</h1>
      <p className="text-muted-foreground mt-2">Discover and purchase agricultural products</p>
    </div>
  );

  return (
    <Layout className={className}>
      <Marketplace
        initialView={initialView}
        initialProductHandle={productHandle}
        onOrderComplete={onOrderComplete}
        catalogOptions={catalogOptions}
        headerContent={headerContent || defaultHeaderContent}
      />
    </Layout>
  );
};

export default OAGExpressMarketplace;