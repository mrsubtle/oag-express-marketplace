"use client";

import { clx } from "@medusajs/ui";
import { RegionProvider } from "@/providers/region";
import "@/styles.css";
import { SecondCol } from "@/components/SecondCol";
import { CartProvider, useCart } from "@/providers/cart";
import { navigateToProduct } from "@/lib/routing";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

function LayoutContent({ children, className }: LayoutProps) {
  const { cart } = useCart();
  
  const handleCheckout = () => {
    console.log("handleCheckout called");
    console.log("Cart:", cart);
    console.log("Cart items:", cart?.items);
    
    // Navigate to the first product in the cart to start checkout
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      console.log("First product:", firstProduct);
      const productHandle = firstProduct.variant?.product?.handle;
      console.log("Product handle:", productHandle);
      if (productHandle) {
        console.log("Navigating to:", productHandle, "with step: address");
        navigateToProduct(productHandle, "address");
      } else {
        console.log("No product handle found");
      }
    } else {
      console.log("No cart or cart items");
    }
  };

  return (
    <div
      className={clx(
        "flex flex-1 gap-2 pb-4",
        "lg:max-w-[758px] lg:mx-auto md:flex-row flex-col w-full mx-4",
      )}
    >
      <div className="flex flex-1 flex-col gap-2">{children}</div>
      <SecondCol onCheckoutClick={handleCheckout} />
    </div>
  );
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={clx("font-inter bg-ui-bg-subtle w-full", className)}>
      <div className={clx("flex justify-center items-start w-full")}>
        <RegionProvider>
          <CartProvider>
            <LayoutContent className={className}>
              {children}
            </LayoutContent>
          </CartProvider>
        </RegionProvider>
      </div>
    </div>
  );
}
