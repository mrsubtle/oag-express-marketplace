// src/components/Storefront.tsx

import React from "react";
import { ProductCard, ProductCardProps } from "./ProductCard";
import { CartButton } from "./CartButton";

/**
 * Props for the ExpressStorefront component.
 */
export interface OAGExpressMarketplaceProps {
  /** List of products to display in the storefront */
  products: ProductCardProps[];
}

/**
 * OAGExpressMarketplace - embeddable storefront component.
 * @param props - ExpressStorefrontProps
 */
export const OAGExpressMarketplace: React.FC<OAGExpressMarketplaceProps> = ({
  products,
}) => {
  return (
    <div
      style={{
        border: "2px solid #eee",
        borderRadius: 8,
        padding: 24,
        maxWidth: 600,
      }}
    >
      <h2 style={{ marginBottom: 24 }}>Express Storefront</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div style={{ marginTop: 32 }}>
        <CartButton />
      </div>
    </div>
  );
};
