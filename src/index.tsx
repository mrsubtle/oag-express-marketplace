// importing the Manrope OAG Brand font for headings
import "@fontsource/manrope/variable.css";
// importing Inter font for body text
import "@fontsource/inter/variable.css";
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

// Layout and utility exports
export { default as Layout } from "@/components/Layout";
export { Router } from "@/components/Router";
export { SecondCol } from "@/components/SecondCol";

// Provider exports
export { RegionProvider, useRegion } from "@/providers/region";
export { CartProvider, useCart } from "@/providers/cart";

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
