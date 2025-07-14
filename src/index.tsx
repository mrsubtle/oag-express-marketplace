"use client";

// Adding TailwindCSS "globals"
import "./styles.css";

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

// Provider exports
export { RegionProvider, useRegion } from "@/providers/region";
export { CartProvider, useCart } from "@/providers/cart";
export { FontProvider, useFont } from "@/providers/fonts";

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
export { sdk } from "@/lib/sdk";
