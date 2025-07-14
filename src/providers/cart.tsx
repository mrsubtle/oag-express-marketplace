"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { sdk } from "@/lib/sdk";
import { useRegion } from "./region";
import { HttpTypes } from "@medusajs/types";

type CartContextType = {
  cart?: HttpTypes.StoreCart;
  addToCart: (
    variantId: string,
    quantity: number,
  ) => Promise<HttpTypes.StoreCart>;
  updateCart: (data: {
    updateData?: HttpTypes.StoreUpdateCart;
    shippingMethodData?: HttpTypes.StoreAddCartShippingMethods;
  }) => Promise<HttpTypes.StoreCart | undefined>;
  refreshCart: () => Promise<HttpTypes.StoreCart | undefined>;
  updateItemQuantity: (
    itemId: string,
    quantity: number,
  ) => Promise<HttpTypes.StoreCart>;
  unsetCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<HttpTypes.StoreCart>();
  const { region } = useRegion();

  useEffect(() => {
    if (!region) {
      return;
    }
    if (cart) {
      localStorage.setItem("cart_id", cart.id);
      return;
    }

    const cartId = localStorage.getItem("cart_id");
    if (!cartId) {
      // create a cart
      refreshCart();
    } else {
      // retrieve cart
      sdk.store.cart
        .retrieve(cartId, {
          fields:
            "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*",
        })
        .then(({ cart: dataCart }) => {
          setCart(dataCart);
        });
    }
  }, [cart, region]);

  useEffect(() => {
    if (!cart || !region || cart.region_id === region.id) {
      return;
    }

    sdk.store.cart
      .update(cart.id, {
        region_id: region.id,
      }, {
        fields:
          "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*",
      })
      .then(({ cart: dataCart }) => {
        setCart(dataCart);
      });
  }, [region]);

  const refreshCart = async () => {
    if (!region) {
      return;
    }

    const { cart: dataCart } = await sdk.store.cart.create({
      region_id: region.id,
    });

    localStorage.setItem("cart_id", dataCart.id);
    setCart(dataCart);

    return dataCart;
  };

  const addToCart = async (variantId: string, quantity: number) => {
    let currentCart = cart;
    
    // If no cart exists, create a new one
    if (!currentCart) {
      currentCart = await refreshCart();
      if (!currentCart) {
        throw new Error("Could not create cart");
      }
    }

    const { cart: dataCart } = await sdk.store.cart.createLineItem(
      currentCart.id,
      {
        variant_id: variantId,
        quantity,
      },
      {
        fields:
          "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*",
      }
    );
    setCart(dataCart);

    return dataCart;
  };

  const updateCart = async ({
    updateData,
    shippingMethodData,
  }: {
    updateData?: HttpTypes.StoreUpdateCart;
    shippingMethodData?: HttpTypes.StoreAddCartShippingMethods;
  }) => {
    if (!updateData && !shippingMethodData) {
      return cart;
    }
    let returnedCart = cart;
    const cartFields = {
      fields:
        "+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*",
    };
    
    if (updateData) {
      returnedCart = (await sdk.store.cart.update(cart!.id, updateData, cartFields)).cart;
    }

    if (shippingMethodData) {
      returnedCart = (
        await sdk.store.cart.addShippingMethod(cart!.id, shippingMethodData, cartFields)
      ).cart;
    }

    setCart(returnedCart);

    return returnedCart;
  };

  const updateItemQuantity = async (itemId: string, quantity: number) => {
    const { cart: dataCart } = await sdk.store.cart.updateLineItem(
      cart!.id,
      itemId,
      {
        quantity,
      },
      {
        fields:
          "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*",
      }
    );
    setCart(dataCart);

    return dataCart;
  };

  const unsetCart = () => {
    localStorage.removeItem("cart_id");
    setCart(undefined);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCart,
        refreshCart,
        updateItemQuantity,
        unsetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
