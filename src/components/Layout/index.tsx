"use client";

import { clx } from "@medusajs/ui";
import { RegionProvider } from "@/providers/region";
import "@/styles.css";
import { SecondCol } from "@/components/SecondCol";
import { CartProvider } from "@/providers/cart";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={clx("font-inter bg-ui-bg-subtle w-full", className)}>
      <div className={clx("flex justify-center items-start w-full")}>
        <RegionProvider>
          <CartProvider>
            <div
              className={clx(
                "flex flex-1 gap-2 pb-4",
                "lg:max-w-[758px] lg:mx-auto md:flex-row flex-col w-full mx-4",
              )}
            >
              <div className="flex flex-1 flex-col gap-2">{children}</div>
              <SecondCol />
            </div>
          </CartProvider>
        </RegionProvider>
      </div>
    </div>
  );
}
