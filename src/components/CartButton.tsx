// src/components/CartButton.tsx

import React from "react";

/**
 * CartButton - sample cart button component.
 */
export const CartButton: React.FC = () => {
  return (
    <button
      style={{
        background: "#222",
        color: "#fff",
        border: "none",
        borderRadius: 4,
        padding: "12px 24px",
        fontSize: 16,
        cursor: "pointer",
      }}
      onClick={() => alert("Go to cart!")}
    >
      Go to Cart
    </button>
  );
};
