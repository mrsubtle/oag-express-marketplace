"use client";

// Note: CSS import removed to prevent global style conflicts in parent apps

// Main marketplace component exports
export { default as OAGExpressMarketplace } from "@/components/OAGExpressMarketplace";
export { Marketplace } from "@/components/Marketplace";
export { ProductCatalog } from "@/components/ProductCatalog";
export { ExpressCheckout } from "@/components/ExpressCheckout";

// Step components - for advanced usage
export { ProductSelection } from "@/components/ProductSelection";
export { AddressForm } from "@/components/AddressForm";
export { ShippingOptions } from "@/components/ShippingOptions";
export { Payment } from "@/components/Payment";
export { StripePayment } from "@/components/StripePayment";

// Typography components
export { 
  BrandText, 
  UIText, 
  H1, 
  H2, 
  H3, 
  H4, 
  H5, 
  H6, 
  P 
} from "@/components/ui/typography";

// Layout and utility exports
export { default as Layout } from "@/components/Layout";
export { Router } from "@/components/Router";
export { SecondCol } from "@/components/SecondCol";
export { SSLWarning } from "@/components/SSLWarning";

// Provider exports
export { RegionProvider, useRegion } from "@/providers/region";
export { CartProvider, useCart } from "@/providers/cart";
export { FontProvider, useFont } from "@/providers/fonts";
export { StorefrontProvider, useStorefront } from "@/providers/storefront";

// Utility exports
export { 
  useRouter, 
  useSearchParams, 
  buildUrl, 
  getProductHandle,
  getMarketplaceView,
  navigateToProduct,
  navigateToCatalog
} from "@/lib/routing";

// SDK export for advanced usage
export { sdk, detectSSLIssues } from "@/lib/sdk";
