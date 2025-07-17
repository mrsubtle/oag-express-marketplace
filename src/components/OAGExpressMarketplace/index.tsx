"use client";

import Layout from "@/components/Layout";
import { Marketplace } from "@/components/Marketplace";
import { FontProvider } from "@/providers/fonts";
import { StorefrontProvider } from "@/providers/storefront";
import { H1 } from "@/components/ui/typography";
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

  /**
   * Base route for the marketplace component - will be prepended to all marketplace routes
   * If not provided, will use the current pathname
   */
  baseRoute?: string;

  /**
   * Stripe publishable key for payment processing
   * If not provided, will try to get from environment variables
   */
  stripePublishableKey?: string;
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
  baseRoute,
  stripePublishableKey,
}: OAGExpressMarketplaceProps) => {
  return (
    <StorefrontProvider 
      backendUrl={backendUrl} 
      publishableKey={publishableKey}
      baseRoute={baseRoute}
    >
      <FontProvider fontBrand={fontBrand} fontUi={fontUi}>
        <Layout className={className}>
          <Marketplace
            initialView={initialView}
            initialProductHandle={productHandle}
            onOrderComplete={onOrderComplete}
            catalogOptions={catalogOptions}
            stripePublishableKey={stripePublishableKey}
          />
        </Layout>
      </FontProvider>
    </StorefrontProvider>
  );
};

export default OAGExpressMarketplace;
