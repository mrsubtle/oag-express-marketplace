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
    // Navigate to the first product in the cart to start checkout
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      const productHandle = firstProduct.variant?.product?.handle;
      if (productHandle) {
        navigateToProduct(productHandle, "address");
      }
    }
  };

  return (
    <div
      className={clx(
        "flex flex-1 gap-2 pb-4",
        "lg:mx-auto md:flex-row flex-col mx-4",
      )}
    >
      <div className="flex flex-1 flex-col gap-2">{children}</div>
      <SecondCol onCheckoutClick={handleCheckout} />
    </div>
  );
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={clx("font-inter bg-ui-bg-subtle", className)}>
      <div className={clx("flex justify-center items-start")}>
        <RegionProvider>
          <CartProvider>
            <LayoutContent className={className}>{children}</LayoutContent>
          </CartProvider>
        </RegionProvider>
      </div>
    </div>
  );
}
