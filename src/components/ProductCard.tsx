// src/components/ProductCard.tsx

import React from "react";

/**
 * Props for the ProductCard component.
 */
export interface ProductCardProps {
  /** Unique product ID */
  id: string;
  /** Product name */
  name: string;
  /** Product price */
  price: number;
  /** Product image URL */
  imageUrl: string;
}

/**
 * ProductCard - displays a single product.
 * @param props - ProductCardProps
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        width: 180,
        textAlign: "center",
        background: "#fafafa",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "100%",
          height: 100,
          objectFit: "cover",
          borderRadius: 4,
          marginBottom: 8,
        }}
      />
      <h4 style={{ margin: "8px 0" }}>{name}</h4>
      <div style={{ color: "#888", marginBottom: 8 }}>${price.toFixed(2)}</div>
      <button
        style={{
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          padding: "8px 16px",
          cursor: "pointer",
        }}
        onClick={() => alert(`Added ${name} to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
};
