"use client";

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles.css
styleInject(`@tailwind base;
@tailwind components;
@tailwind utilities;
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
    font-weight: 400;
  }
}
.select {
  @apply appearance-none border-none bg-no-repeat pr-4;
  background-image: url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6666 10L7.99994 13.3333L11.3333 10" stroke="%239CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.6666 5.99993L7.99994 2.6666L11.3333 5.99993" stroke="%239CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-size: 16px;
  background-position: right top 50%;
  background-color: transparent;
}
`);

// src/components/Layout/index.tsx
import { clx as clx2 } from "@medusajs/ui";

// src/providers/region.tsx
import { createContext, useState, useEffect, useContext } from "react";

// src/lib/sdk.ts
import Medusa from "@medusajs/js-sdk";
var getEnvVar = (key, defaultValue) => {
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key];
  }
  if (typeof window !== "undefined") {
    const windowVar = window[`__${key}__`];
    if (windowVar) {
      return windowVar;
    }
  }
  return defaultValue;
};
var MEDUSA_BACKEND_URL = getEnvVar("NEXT_PUBLIC_MEDUSA_BACKEND_URL", "http://localhost:9000");
var MEDUSA_PUBLISHABLE_KEY = getEnvVar("NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY");
var sdkInstance = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: getEnvVar("NODE_ENV") === "development",
  publishableKey: MEDUSA_PUBLISHABLE_KEY
});
var updateSDKConfig = (config) => {
  if (config.backendUrl) {
    MEDUSA_BACKEND_URL = config.backendUrl;
  }
  if (config.publishableKey) {
    MEDUSA_PUBLISHABLE_KEY = config.publishableKey;
  }
  sdkInstance = new Medusa({
    baseUrl: MEDUSA_BACKEND_URL,
    debug: getEnvVar("NODE_ENV") === "development",
    publishableKey: MEDUSA_PUBLISHABLE_KEY
  });
};
var sdk = new Proxy({}, {
  get(_, prop) {
    return sdkInstance[prop];
  }
});

// src/providers/region.tsx
import { jsx } from "react/jsx-runtime";
var RegionContext = createContext(null);
var RegionProvider = ({ children }) => {
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState();
  useEffect(() => {
    if (regions.length) {
      return;
    }
    sdk.store.region.list().then(({ regions: regions2 }) => {
      setRegions(regions2);
    });
  }, []);
  useEffect(() => {
    if (region) {
      localStorage.setItem("region_id", region.id);
      return;
    }
    const regionId = localStorage.getItem("region_id");
    if (!regionId) {
      if (regions.length) {
        setRegion(regions[0]);
      }
    } else {
      sdk.store.region.retrieve(regionId).then(({ region: dataRegion }) => {
        setRegion(dataRegion);
      });
    }
  }, [region, regions]);
  return /* @__PURE__ */ jsx(
    RegionContext.Provider,
    {
      value: {
        region,
        regions,
        setRegion
      },
      children
    }
  );
};
var useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return context;
};

// src/components/SecondCol/index.tsx
import { clx } from "@medusajs/ui";

// src/providers/cart.tsx
import { createContext as createContext2, useState as useState2, useEffect as useEffect2, useContext as useContext2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var CartContext = createContext2(null);
var CartProvider = ({ children }) => {
  const [cart, setCart] = useState2();
  const { region } = useRegion();
  useEffect2(() => {
    if (!region) {
      return;
    }
    if (cart) {
      localStorage.setItem("cart_id", cart.id);
      return;
    }
    const cartId = localStorage.getItem("cart_id");
    if (!cartId) {
      refreshCart();
    } else {
      sdk.store.cart.retrieve(cartId, {
        fields: "+items.variant.*,+items.variant.options.*,+items.variant.options.option.*"
      }).then(({ cart: dataCart }) => {
        setCart(dataCart);
      });
    }
  }, [cart, region]);
  useEffect2(() => {
    if (!cart || !region || cart.region_id === region.id) {
      return;
    }
    sdk.store.cart.update(cart.id, {
      region_id: region.id
    }).then(({ cart: dataCart }) => {
      setCart(dataCart);
    });
  }, [region]);
  const refreshCart = async () => {
    if (!region) {
      return;
    }
    const { cart: dataCart } = await sdk.store.cart.create({
      region_id: region.id
    });
    localStorage.setItem("cart_id", dataCart.id);
    setCart(dataCart);
    return dataCart;
  };
  const addToCart = async (variantId, quantity) => {
    const newCart = await refreshCart();
    if (!newCart) {
      throw new Error("Could not create cart");
    }
    const { cart: dataCart } = await sdk.store.cart.createLineItem(newCart.id, {
      variant_id: variantId,
      quantity
    });
    setCart(dataCart);
    return dataCart;
  };
  const updateCart = async ({
    updateData,
    shippingMethodData
  }) => {
    if (!updateData && !shippingMethodData) {
      return cart;
    }
    let returnedCart = cart;
    if (updateData) {
      returnedCart = (await sdk.store.cart.update(cart.id, updateData)).cart;
    }
    if (shippingMethodData) {
      returnedCart = (await sdk.store.cart.addShippingMethod(cart.id, shippingMethodData)).cart;
    }
    setCart(returnedCart);
    return returnedCart;
  };
  const updateItemQuantity = async (itemId, quantity) => {
    const { cart: dataCart } = await sdk.store.cart.updateLineItem(
      cart.id,
      itemId,
      {
        quantity
      }
    );
    setCart(dataCart);
    return dataCart;
  };
  const unsetCart = () => {
    localStorage.removeItem("cart_id");
    setCart(void 0);
  };
  return /* @__PURE__ */ jsx2(
    CartContext.Provider,
    {
      value: {
        cart,
        addToCart,
        updateCart,
        refreshCart,
        updateItemQuantity,
        unsetCart
      },
      children
    }
  );
};
var useCart = () => {
  const context = useContext2(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// src/components/SecondCol/index.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var SecondCol = () => {
  const { region, regions, setRegion } = useRegion();
  const { cart } = useCart();
  const formatPrice = (amount, currencyCode) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode
    }).format(amount / 100);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clx(
        "flex flex-col gap-6",
        "lg:w-1/2 w-full"
      ),
      children: [
        cart && cart.items && cart.items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg border p-4 space-y-4", children: [
          /* @__PURE__ */ jsx3("h3", { className: "font-medium text-lg font-manrope", children: "Cart Summary" }),
          /* @__PURE__ */ jsx3("div", { className: "space-y-3", children: cart.items.map((item) => {
            var _a, _b, _c, _d, _e;
            return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              ((_b = (_a = item.variant) == null ? void 0 : _a.product) == null ? void 0 : _b.thumbnail) && /* @__PURE__ */ jsx3(
                "img",
                {
                  src: item.variant.product.thumbnail,
                  alt: item.variant.product.title || "Product",
                  className: "w-16 h-16 object-cover rounded-md bg-gray-100"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx3("h4", { className: "text-sm font-medium truncate font-manrope", children: (_d = (_c = item.variant) == null ? void 0 : _c.product) == null ? void 0 : _d.title }),
                ((_e = item.variant) == null ? void 0 : _e.title) && /* @__PURE__ */ jsx3("p", { className: "text-xs text-gray-500", children: item.variant.title }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-1", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
                    "Qty: ",
                    item.quantity
                  ] }),
                  /* @__PURE__ */ jsx3("span", { className: "text-sm font-medium", children: formatPrice(item.total || 0, cart.currency_code) })
                ] })
              ] })
            ] }, item.id);
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t pt-4 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Subtotal:" }),
              /* @__PURE__ */ jsx3("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
            ] }),
            cart.shipping_total !== void 0 && cart.shipping_total > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Shipping:" }),
              /* @__PURE__ */ jsx3("span", { children: formatPrice(cart.shipping_total, cart.currency_code) })
            ] }),
            cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Tax:" }),
              /* @__PURE__ */ jsx3("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-t pt-2 flex justify-between font-medium", children: [
              /* @__PURE__ */ jsx3("span", { children: "Total:" }),
              /* @__PURE__ */ jsx3("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg border p-4 space-y-3", children: [
          /* @__PURE__ */ jsx3("h3", { className: "font-medium font-manrope", children: "Settings" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx3("span", { className: "text-sm text-ui-fg-muted", children: "Region:" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: (region == null ? void 0 : region.id) || "",
                onChange: (e) => {
                  const selectedRegion = regions.find((r) => r.id === e.target.value);
                  setRegion(selectedRegion);
                },
                className: "w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ jsx3("option", { value: "", children: "Select Region" }),
                  regions.map((r) => /* @__PURE__ */ jsx3("option", { value: r.id, children: r.name }, r.id))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
          /* @__PURE__ */ jsx3("span", { className: "text-xs text-ui-fg-subtle", children: "Powered by" }),
          /* @__PURE__ */ jsx3(
            "img",
            {
              src: "https://res.cloudinary.com/dza7lstvk/image/upload/v1735642745/Medusa%20Resources/medusa-express-logo_gqu5qy.png",
              alt: "Medusa",
              width: 67,
              height: 16,
              className: "mx-auto"
            }
          )
        ] })
      ]
    }
  );
};

// src/components/Layout/index.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function Layout({ children, className }) {
  return /* @__PURE__ */ jsx4("div", { className: clx2("font-inter bg-ui-bg-subtle w-full", className), children: /* @__PURE__ */ jsx4(
    "div",
    {
      className: clx2(
        "flex justify-center items-start w-full"
      ),
      children: /* @__PURE__ */ jsx4(RegionProvider, { children: /* @__PURE__ */ jsx4(CartProvider, { children: /* @__PURE__ */ jsxs2(
        "div",
        {
          className: clx2(
            "flex gap-2 py-4",
            "lg:w-[758px] lg:mx-auto w-full mx-4"
          ),
          children: [
            /* @__PURE__ */ jsx4("div", { className: "flex flex-col gap-2 lg:w-1/2 w-full", children }),
            /* @__PURE__ */ jsx4(SecondCol, {})
          ]
        }
      ) }) })
    }
  ) });
}

// src/components/Marketplace/index.tsx
import { useEffect as useEffect9, useState as useState10 } from "react";

// src/components/ProductCatalog/index.tsx
import { useEffect as useEffect3, useState as useState3 } from "react";

// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx5(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/input.tsx
import * as React2 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/ProductCatalog/index.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductCatalog = ({
  onProductSelect,
  searchPlaceholder = "Search products...",
  showSearch = true,
  showCategories = true,
  productsPerPage = 12
}) => {
  var _a;
  const { region } = useRegion();
  const [products, setProducts] = useState3([]);
  const [categories, setCategories] = useState3([]);
  const [loading, setLoading] = useState3(true);
  const [searchQuery, setSearchQuery] = useState3("");
  const [selectedCategory, setSelectedCategory] = useState3(null);
  const [currentPage, setCurrentPage] = useState3(1);
  const [hasMore, setHasMore] = useState3(false);
  const [error, setError] = useState3(null);
  useEffect3(() => {
    const fetchCategories = async () => {
      if (!showCategories) return;
      try {
        const { product_categories } = await sdk.store.category.list({
          fields: "id,name,handle,description"
        });
        setCategories(product_categories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, [showCategories]);
  useEffect3(() => {
    const fetchProducts = async () => {
      if (!region) return;
      try {
        setLoading(true);
        setError(null);
        const searchParams = {
          limit: productsPerPage,
          offset: (currentPage - 1) * productsPerPage,
          fields: "id,title,handle,description,thumbnail,status,created_at,updated_at",
          region_id: region.id
        };
        if (searchQuery.trim()) {
          searchParams.q = searchQuery.trim();
        }
        if (selectedCategory) {
          searchParams.category_id = [selectedCategory];
        }
        const { products: fetchedProducts, count } = await sdk.store.product.list(searchParams);
        if (currentPage === 1) {
          setProducts(fetchedProducts);
        } else {
          setProducts((prev) => [...prev, ...fetchedProducts]);
        }
        setHasMore(
          fetchedProducts.length === productsPerPage && currentPage * productsPerPage < count
        );
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [region, searchQuery, selectedCategory, currentPage, productsPerPage]);
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setProducts([]);
  };
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setProducts([]);
  };
  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const formatPrice = (variants) => {
    if (!variants || variants.length === 0) return "Price unavailable";
    const firstVariant = variants[0];
    if (!firstVariant.calculated_price || !firstVariant.calculated_price.calculated_amount)
      return "Price unavailable";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: firstVariant.calculated_price.currency_code || "CAD"
    }).format(firstVariant.calculated_price.calculated_amount / 100);
  };
  if (loading && products.length === 0) {
    return /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs3("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx7("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx7("p", { className: "text-gray-600", children: "Loading products..." })
    ] }) });
  }
  if (error && products.length === 0) {
    return /* @__PURE__ */ jsxs3("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ jsx7("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Products" }),
      /* @__PURE__ */ jsx7("p", { className: "text-red-600", children: error }),
      /* @__PURE__ */ jsx7(
        Button,
        {
          onClick: () => window.location.reload(),
          className: "mt-4",
          variant: "secondary",
          children: "Try Again"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs3("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs3("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx7("h1", { className: "text-2xl font-bold text-foreground font-manrope", children: "Product Catalog" }),
      showSearch && /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
        /* @__PURE__ */ jsx7(
          Input,
          {
            type: "search",
            placeholder: searchPlaceholder,
            value: searchQuery,
            onChange: (e) => handleSearch(e.target.value),
            className: "pl-10"
          }
        ),
        /* @__PURE__ */ jsx7("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx7(
          "svg",
          {
            className: "h-5 w-5 text-gray-400",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx7(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              }
            )
          }
        ) })
      ] }),
      showCategories && categories.length > 0 && /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx7("h3", { className: "text-sm font-medium text-muted-foreground font-manrope", children: "Categories" }),
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx7(
            Button,
            {
              variant: selectedCategory === null ? "default" : "secondary",
              size: "sm",
              onClick: () => handleCategorySelect(null),
              children: "All Products"
            }
          ),
          categories.map((category) => /* @__PURE__ */ jsx7(
            Button,
            {
              variant: selectedCategory === category.id ? "default" : "secondary",
              size: "sm",
              onClick: () => handleCategorySelect(category.id),
              children: category.name
            },
            category.id
          ))
        ] })
      ] })
    ] }),
    (searchQuery || selectedCategory) && /* @__PURE__ */ jsxs3("div", { className: "text-sm text-gray-600", children: [
      searchQuery && `Results for "${searchQuery}"`,
      searchQuery && selectedCategory && " in ",
      selectedCategory && ((_a = categories.find((c) => c.id === selectedCategory)) == null ? void 0 : _a.name),
      products.length > 0 && ` (${products.length} products)`
    ] }),
    products.length === 0 && !loading ? /* @__PURE__ */ jsxs3("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsx7("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ jsx7(
        "svg",
        {
          className: "mx-auto h-12 w-12",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx7(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1,
              d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx7("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "No products found" }),
      /* @__PURE__ */ jsx7("p", { className: "text-muted-foreground", children: searchQuery || selectedCategory ? "Try adjusting your search or filters" : "No products are available at the moment" })
    ] }) : /* @__PURE__ */ jsx7("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: products.map((product) => /* @__PURE__ */ jsxs3(
      "div",
      {
        className: "bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
        onClick: () => onProductSelect(product.handle),
        children: [
          /* @__PURE__ */ jsx7("div", { className: "aspect-square bg-gray-100", children: product.thumbnail ? /* @__PURE__ */ jsx7(
            "img",
            {
              src: product.thumbnail,
              alt: product.title,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsx7("div", { className: "w-full h-full flex items-center justify-center text-gray-400", children: /* @__PURE__ */ jsx7(
            "svg",
            {
              className: "h-16 w-16",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx7(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsxs3("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx7("h3", { className: "font-medium text-foreground mb-2 line-clamp-2 font-manrope", children: product.title }),
            product.description && /* @__PURE__ */ jsx7("p", { className: "text-sm text-muted-foreground mb-3 line-clamp-2", children: product.description }),
            /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx7("span", { className: "text-lg font-semibold text-green-600", children: formatPrice(product.variants) }),
              /* @__PURE__ */ jsx7(Button, { size: "sm", children: "View Details" })
            ] })
          ] })
        ]
      },
      product.id
    )) }),
    hasMore && !loading && /* @__PURE__ */ jsx7("div", { className: "text-center", children: /* @__PURE__ */ jsx7(Button, { onClick: loadMore, variant: "secondary", children: "Load More Products" }) }),
    loading && products.length > 0 && /* @__PURE__ */ jsx7("div", { className: "text-center py-4", children: /* @__PURE__ */ jsx7("div", { className: "w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" }) })
  ] });
};

// src/lib/routing.ts
import { useCallback, useEffect as useEffect4, useState as useState4 } from "react";
var useSearchParams = () => {
  const [searchParams, setSearchParams] = useState4(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  });
  const updateSearchParams = useCallback((newParams) => {
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.pushState({}, "", newUrl);
      setSearchParams(new URLSearchParams(newParams));
    }
  }, []);
  useEffect4(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        setSearchParams(new URLSearchParams(window.location.search));
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, []);
  return {
    get: (key) => searchParams.get(key),
    set: (key, value) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      updateSearchParams(newParams);
    },
    delete: (key) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete(key);
      updateSearchParams(newParams);
    },
    toString: () => searchParams.toString()
  };
};
var useRouter = () => {
  const [currentPath, setCurrentPath] = useState4(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  });
  const push = useCallback((url) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", url);
      setCurrentPath(window.location.pathname);
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);
  const replace = useCallback((url) => {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", url);
      setCurrentPath(window.location.pathname);
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);
  useEffect4(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    };
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handlePopState);
      window.addEventListener("routechange", handleRouteChange);
      return () => {
        window.removeEventListener("popstate", handlePopState);
        window.removeEventListener("routechange", handleRouteChange);
      };
    }
  }, []);
  return {
    push,
    replace,
    pathname: currentPath,
    back: () => {
      if (typeof window !== "undefined") {
        window.history.back();
      }
    },
    forward: () => {
      if (typeof window !== "undefined") {
        window.history.forward();
      }
    }
  };
};
var getProductHandle = () => {
  if (typeof window === "undefined") return null;
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1] || null;
};
var getMarketplaceView = () => {
  const productHandle = getProductHandle();
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const hasStep = searchParams.has("step");
  if (productHandle && (hasStep || searchParams.get("view") === "product")) {
    return "product";
  }
  return "catalog";
};
var navigateToProduct = (productHandle, step) => {
  if (typeof window === "undefined") return;
  const url = step ? buildUrl(`/${productHandle}`, { step }) : `/${productHandle}?view=product`;
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
};
var navigateToCatalog = () => {
  if (typeof window === "undefined") return;
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.delete("step");
  currentParams.delete("view");
  const baseUrl = window.location.pathname.split("/")[1] ? `/${window.location.pathname.split("/")[1]}` : "/";
  const url = currentParams.toString() ? `${baseUrl}?${currentParams.toString()}` : baseUrl;
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
};
var buildUrl = (path, params) => {
  const url = new URL(path, typeof window !== "undefined" ? window.location.origin : "");
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  return url.pathname + url.search;
};

// src/components/ExpressCheckout/index.tsx
import { useEffect as useEffect8, useMemo, useState as useState9 } from "react";

// src/components/ProductSelection/index.tsx
import { useEffect as useEffect5, useState as useState5 } from "react";

// src/components/ui/label.tsx
import * as React3 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx8 } from "react/jsx-runtime";
var labelVariants = cva2(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/select.tsx
import * as React4 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx9(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx9(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx9(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx9(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React4.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx9(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs4(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx9(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx9(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx9(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx9("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx9(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx9(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx9(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ProductSelection/index.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var ProductSelection = ({
  productHandle,
  onContinue
}) => {
  var _a;
  const [product, setProduct] = useState5(null);
  const [selectedVariant, setSelectedVariant] = useState5(null);
  const [quantity, setQuantity] = useState5(1);
  const [loading, setLoading] = useState5(true);
  const [addingToCart, setAddingToCart] = useState5(false);
  const [error, setError] = useState5(null);
  const { addToCart, cart } = useCart();
  const { region } = useRegion();
  useEffect5(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const { product: productData } = await sdk.store.product.retrieve(
          productHandle,
          {
            fields: "+variants.*,+variants.options.*,+variants.options.option.*"
          }
        );
        setProduct(productData);
        if (productData.variants && productData.variants.length > 0) {
          setSelectedVariant(productData.variants[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    if (productHandle && region) {
      fetchProduct();
    }
  }, [productHandle, region]);
  const handleAddToCart = async () => {
    if (!selectedVariant) {
      setError("Please select a product variant");
      return;
    }
    if (quantity < 1) {
      setError("Quantity must be at least 1");
      return;
    }
    try {
      setAddingToCart(true);
      setError(null);
      await addToCart(selectedVariant.id, quantity);
      onContinue();
    } catch (err) {
      console.error("Error adding to cart:", err);
      setError("Failed to add product to cart");
    } finally {
      setAddingToCart(false);
    }
  };
  const formatPrice = (amount, currencyCode) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode
    }).format(amount / 100);
  };
  if (loading) {
    return /* @__PURE__ */ jsx10("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs5("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx10("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx10("p", { className: "text-gray-600", children: "Loading product details..." })
    ] }) });
  }
  if (error && !product) {
    return /* @__PURE__ */ jsxs5("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ jsx10("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Product" }),
      /* @__PURE__ */ jsx10("p", { className: "text-red-600", children: error })
    ] });
  }
  if (!product) {
    return /* @__PURE__ */ jsxs5("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
      /* @__PURE__ */ jsx10("h3", { className: "text-yellow-800 font-medium mb-2", children: "Product Not Found" }),
      /* @__PURE__ */ jsx10("p", { className: "text-yellow-600", children: "The requested product could not be found." })
    ] });
  }
  const currentProductInCart = (_a = cart == null ? void 0 : cart.items) == null ? void 0 : _a.find(
    (item) => {
      var _a2, _b;
      return ((_b = (_a2 = item.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.handle) === productHandle;
    }
  );
  return /* @__PURE__ */ jsxs5("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs5("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx10("h1", { className: "text-2xl font-bold text-foreground font-manrope", children: product.title }),
        product.description && /* @__PURE__ */ jsx10("p", { className: "text-muted-foreground mt-2", children: product.description })
      ] }),
      product.thumbnail && /* @__PURE__ */ jsx10("div", { className: "aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg bg-gray-100", children: /* @__PURE__ */ jsx10(
        "img",
        {
          src: product.thumbnail,
          alt: product.title,
          className: "w-full h-full object-cover"
        }
      ) }),
      product.variants && product.variants.length > 1 && /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx10(Label, { htmlFor: "variant-select", children: "Select Variant" }),
        /* @__PURE__ */ jsxs5(
          Select,
          {
            value: (selectedVariant == null ? void 0 : selectedVariant.id) || "",
            onValueChange: (value) => {
              var _a2;
              const variant = (_a2 = product.variants) == null ? void 0 : _a2.find((v) => v.id === value);
              setSelectedVariant(variant || null);
            },
            children: [
              /* @__PURE__ */ jsx10(SelectTrigger, { children: /* @__PURE__ */ jsx10(SelectValue, { placeholder: "Choose a variant" }) }),
              /* @__PURE__ */ jsx10(SelectContent, { children: product.variants.map((variant) => /* @__PURE__ */ jsx10(SelectItem, { value: variant.id, children: /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ jsx10("span", { children: variant.title }),
                variant.calculated_price && /* @__PURE__ */ jsx10("span", { className: "ml-2 font-medium", children: formatPrice(
                  variant.calculated_price.calculated_amount || 0,
                  variant.calculated_price.currency_code || "CAD"
                ) })
              ] }) }, variant.id)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx10(Label, { htmlFor: "quantity", children: "Quantity" }),
        /* @__PURE__ */ jsx10(
          Input,
          {
            id: "quantity",
            type: "number",
            min: "1",
            max: (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) || 99,
            value: quantity,
            onChange: (e) => setQuantity(parseInt(e.target.value) || 1),
            className: "w-24"
          }
        ),
        (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) !== void 0 && /* @__PURE__ */ jsxs5("p", { className: "text-sm text-gray-500", children: [
          selectedVariant.inventory_quantity,
          " available"
        ] })
      ] }),
      (selectedVariant == null ? void 0 : selectedVariant.calculated_price) && /* @__PURE__ */ jsx10("div", { className: "p-4 bg-gray-50 rounded-lg", children: /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx10("span", { className: "text-lg font-medium", children: "Price:" }),
        /* @__PURE__ */ jsx10("span", { className: "text-2xl font-bold text-green-600", children: formatPrice(
          (selectedVariant.calculated_price.calculated_amount || 0) * quantity,
          selectedVariant.calculated_price.currency_code || "CAD"
        ) })
      ] }) })
    ] }),
    error && /* @__PURE__ */ jsx10("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx10("p", { className: "text-red-600", children: error }) }),
    currentProductInCart && /* @__PURE__ */ jsx10("div", { className: "p-4 bg-green-50 border border-green-200 rounded-lg", children: /* @__PURE__ */ jsxs5("p", { className: "text-green-700", children: [
      "\u2713 This product is already in your cart (",
      currentProductInCart.quantity,
      " items)"
    ] }) }),
    /* @__PURE__ */ jsxs5("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx10(
        Button,
        {
          onClick: handleAddToCart,
          disabled: !selectedVariant || addingToCart || quantity < 1,
          className: "flex-1",
          size: "lg",
          children: addingToCart ? "Adding to Cart..." : currentProductInCart ? "Update Cart" : "Add to Cart"
        }
      ),
      currentProductInCart && /* @__PURE__ */ jsx10(
        Button,
        {
          onClick: onContinue,
          variant: "secondary",
          className: "flex-1",
          size: "lg",
          children: "Continue to Checkout"
        }
      )
    ] })
  ] });
};

// src/components/AddressForm/index.tsx
import { useState as useState6 } from "react";

// src/components/ui/checkbox.tsx
import * as React5 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check as Check2 } from "lucide-react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Checkbox = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx11(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx11(Check2, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/AddressForm/index.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var AddressForm = ({ onContinue, onBack }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const { updateCart, cart } = useCart();
  const { region } = useRegion();
  const [shippingAddress, setShippingAddress] = useState6({
    first_name: ((_a = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _a.first_name) || "",
    last_name: ((_b = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _b.last_name) || "",
    address_1: ((_c = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _c.address_1) || "",
    address_2: ((_d = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _d.address_2) || "",
    city: ((_e = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _e.city) || "",
    postal_code: ((_f = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _f.postal_code) || "",
    province: ((_g = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _g.province) || "",
    country_code: ((_h = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _h.country_code) || ((_j = (_i = region == null ? void 0 : region.countries) == null ? void 0 : _i[0]) == null ? void 0 : _j.iso_2) || "",
    phone: ((_k = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _k.phone) || "",
    company: ((_l = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _l.company) || ""
  });
  const [billingAddress, setBillingAddress] = useState6({
    first_name: ((_m = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _m.first_name) || "",
    last_name: ((_n = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _n.last_name) || "",
    address_1: ((_o = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _o.address_1) || "",
    address_2: ((_p = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _p.address_2) || "",
    city: ((_q = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _q.city) || "",
    postal_code: ((_r = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _r.postal_code) || "",
    province: ((_s = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _s.province) || "",
    country_code: ((_t = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _t.country_code) || ((_v = (_u = region == null ? void 0 : region.countries) == null ? void 0 : _u[0]) == null ? void 0 : _v.iso_2) || "",
    phone: ((_w = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _w.phone) || "",
    company: ((_x = cart == null ? void 0 : cart.billing_address) == null ? void 0 : _x.company) || ""
  });
  const [sameAsShipping, setSameAsShipping] = useState6(
    (cart == null ? void 0 : cart.billing_address) ? false : true
  );
  const [loading, setLoading] = useState6(false);
  const [errors, setErrors] = useState6({});
  const validateAddress = (address, prefix = "") => {
    const addressErrors = {};
    if (!address.first_name.trim()) {
      addressErrors[`${prefix}first_name`] = "First name is required";
    }
    if (!address.last_name.trim()) {
      addressErrors[`${prefix}last_name`] = "Last name is required";
    }
    if (!address.address_1.trim()) {
      addressErrors[`${prefix}address_1`] = "Address is required";
    }
    if (!address.city.trim()) {
      addressErrors[`${prefix}city`] = "City is required";
    }
    if (!address.postal_code.trim()) {
      addressErrors[`${prefix}postal_code`] = "Postal code is required";
    }
    if (!address.country_code.trim()) {
      addressErrors[`${prefix}country_code`] = "Country is required";
    }
    return addressErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const shippingErrors = validateAddress(shippingAddress, "shipping_");
    const billingErrors = sameAsShipping ? {} : validateAddress(billingAddress, "billing_");
    const allErrors = { ...shippingErrors, ...billingErrors };
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }
    try {
      setLoading(true);
      const finalBillingAddress = sameAsShipping ? shippingAddress : billingAddress;
      await updateCart({
        updateData: {
          shipping_address: shippingAddress,
          billing_address: finalBillingAddress
        }
      });
      onContinue();
    } catch (err) {
      console.error("Error updating addresses:", err);
      setErrors({ general: "Failed to save addresses. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  const updateShippingAddress = (field, value) => {
    setShippingAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[`shipping_${field}`]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`shipping_${field}`];
        return newErrors;
      });
    }
  };
  const updateBillingAddress = (field, value) => {
    setBillingAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[`billing_${field}`]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`billing_${field}`];
        return newErrors;
      });
    }
  };
  const countries = (region == null ? void 0 : region.countries) || [];
  return /* @__PURE__ */ jsxs6("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx12("h2", { className: "text-xl font-semibold font-manrope", children: "Shipping Address" }),
      /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_first_name", children: "First Name *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_first_name",
              value: shippingAddress.first_name,
              onChange: (e) => updateShippingAddress("first_name", e.target.value),
              className: errors.shipping_first_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_first_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_first_name })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_last_name", children: "Last Name *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_last_name",
              value: shippingAddress.last_name,
              onChange: (e) => updateShippingAddress("last_name", e.target.value),
              className: errors.shipping_last_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_last_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_last_name })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_company", children: "Company" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_company",
            value: shippingAddress.company,
            onChange: (e) => updateShippingAddress("company", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_address_1", children: "Address *" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_address_1",
            value: shippingAddress.address_1,
            onChange: (e) => updateShippingAddress("address_1", e.target.value),
            className: errors.shipping_address_1 ? "border-red-300" : ""
          }
        ),
        errors.shipping_address_1 && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_address_1 })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_address_2", children: "Address Line 2" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_address_2",
            value: shippingAddress.address_2,
            onChange: (e) => updateShippingAddress("address_2", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_city", children: "City *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_city",
              value: shippingAddress.city,
              onChange: (e) => updateShippingAddress("city", e.target.value),
              className: errors.shipping_city ? "border-red-300" : ""
            }
          ),
          errors.shipping_city && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_city })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_postal_code", children: "Postal Code *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_postal_code",
              value: shippingAddress.postal_code,
              onChange: (e) => updateShippingAddress("postal_code", e.target.value),
              className: errors.shipping_postal_code ? "border-red-300" : ""
            }
          ),
          errors.shipping_postal_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_postal_code })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_province", children: "State/Province" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "shipping_province",
              value: shippingAddress.province,
              onChange: (e) => updateShippingAddress("province", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_country", children: "Country *" }),
          /* @__PURE__ */ jsxs6(
            "select",
            {
              id: "shipping_country",
              value: shippingAddress.country_code,
              onChange: (e) => updateShippingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.shipping_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ jsx12("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ jsx12("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.shipping_country_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_country_code })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx12(Label, { htmlFor: "shipping_phone", children: "Phone" }),
        /* @__PURE__ */ jsx12(
          Input,
          {
            id: "shipping_phone",
            type: "tel",
            value: shippingAddress.phone,
            onChange: (e) => updateShippingAddress("phone", e.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx12(
          Checkbox,
          {
            id: "same_as_shipping",
            checked: sameAsShipping,
            onCheckedChange: (checked) => setSameAsShipping(!!checked)
          }
        ),
        /* @__PURE__ */ jsx12(Label, { htmlFor: "same_as_shipping", children: "Billing address is the same as shipping address" })
      ] }),
      !sameAsShipping && /* @__PURE__ */ jsxs6("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx12("h3", { className: "text-lg font-medium font-manrope", children: "Billing Address" }),
        /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_first_name", children: "First Name *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_first_name",
                value: billingAddress.first_name,
                onChange: (e) => updateBillingAddress("first_name", e.target.value),
                className: errors.billing_first_name ? "border-red-300" : ""
              }
            ),
            errors.billing_first_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_first_name })
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_last_name", children: "Last Name *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_last_name",
                value: billingAddress.last_name,
                onChange: (e) => updateBillingAddress("last_name", e.target.value),
                className: errors.billing_last_name ? "border-red-300" : ""
              }
            ),
            errors.billing_last_name && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_last_name })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_address_1", children: "Address *" }),
          /* @__PURE__ */ jsx12(
            Input,
            {
              id: "billing_address_1",
              value: billingAddress.address_1,
              onChange: (e) => updateBillingAddress("address_1", e.target.value),
              className: errors.billing_address_1 ? "border-red-300" : ""
            }
          ),
          errors.billing_address_1 && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_address_1 })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_city", children: "City *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_city",
                value: billingAddress.city,
                onChange: (e) => updateBillingAddress("city", e.target.value),
                className: errors.billing_city ? "border-red-300" : ""
              }
            ),
            errors.billing_city && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_city })
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_postal_code", children: "Postal Code *" }),
            /* @__PURE__ */ jsx12(
              Input,
              {
                id: "billing_postal_code",
                value: billingAddress.postal_code,
                onChange: (e) => updateBillingAddress("postal_code", e.target.value),
                className: errors.billing_postal_code ? "border-red-300" : ""
              }
            ),
            errors.billing_postal_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_postal_code })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx12(Label, { htmlFor: "billing_country", children: "Country *" }),
          /* @__PURE__ */ jsxs6(
            "select",
            {
              id: "billing_country",
              value: billingAddress.country_code,
              onChange: (e) => updateBillingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.billing_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ jsx12("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ jsx12("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.billing_country_code && /* @__PURE__ */ jsx12("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_country_code })
        ] })
      ] })
    ] }),
    errors.general && /* @__PURE__ */ jsx12("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx12("p", { className: "text-red-600", children: errors.general }) }),
    /* @__PURE__ */ jsxs6("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx12(
        Button,
        {
          type: "button",
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: loading,
          children: "Back to Product"
        }
      ),
      /* @__PURE__ */ jsx12(
        Button,
        {
          type: "submit",
          className: "flex-1",
          disabled: loading,
          children: loading ? "Saving..." : "Continue to Shipping"
        }
      )
    ] })
  ] });
};

// src/components/ShippingOptions/index.tsx
import { useEffect as useEffect6, useState as useState7 } from "react";

// src/components/ui/radio-group.tsx
import * as React6 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { jsx as jsx13 } from "react/jsx-runtime";
var RadioGroup = React6.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx13(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React6.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx13(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx13(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx13(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ShippingOptions/index.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var ShippingOptions = ({
  onContinue,
  onBack
}) => {
  const { cart, updateCart } = useCart();
  const [shippingOptions, setShippingOptions] = useState7([]);
  const [selectedOptionId, setSelectedOptionId] = useState7("");
  const [loading, setLoading] = useState7(true);
  const [saving, setSaving] = useState7(false);
  const [error, setError] = useState7(null);
  useEffect6(() => {
    const fetchShippingOptions = async () => {
      if (!(cart == null ? void 0 : cart.id)) {
        setError("No cart found");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const { shipping_options } = await sdk.store.fulfillment.listCartOptions({
          cart_id: cart.id
        });
        setShippingOptions(shipping_options);
        if (cart.shipping_methods && cart.shipping_methods.length > 0) {
          setSelectedOptionId(
            cart.shipping_methods[0].shipping_option_id || ""
          );
        }
      } catch (err) {
        console.error("Error fetching shipping options:", err);
        setError("Failed to load shipping options");
      } finally {
        setLoading(false);
      }
    };
    fetchShippingOptions();
  }, [cart == null ? void 0 : cart.id]);
  const formatPrice = (amount, currencyCode) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode
    }).format(amount / 100);
  };
  const handleContinue = async () => {
    if (!selectedOptionId) {
      setError("Please select a shipping method");
      return;
    }
    if (!(cart == null ? void 0 : cart.id)) {
      setError("No cart found");
      return;
    }
    try {
      setSaving(true);
      setError(null);
      await updateCart({
        shippingMethodData: {
          option_id: selectedOptionId
        }
      });
      onContinue();
    } catch (err) {
      console.error("Error saving shipping method:", err);
      setError("Failed to save shipping method");
    } finally {
      setSaving(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx14("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs7("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx14("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx14("p", { className: "text-gray-600", children: "Loading shipping options..." })
    ] }) });
  }
  if (error && shippingOptions.length === 0) {
    return /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ jsxs7("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ jsx14("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Shipping Options" }),
        /* @__PURE__ */ jsx14("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ jsx14("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx14(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  if (shippingOptions.length === 0) {
    return /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ jsxs7("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ jsx14("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Shipping Options Available" }),
        /* @__PURE__ */ jsx14("p", { className: "text-yellow-600", children: "No shipping options are available for your address. Please check your address or contact support." })
      ] }),
      /* @__PURE__ */ jsx14("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx14(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs7("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx14("h2", { className: "text-xl font-semibold font-manrope", children: "Choose Shipping Method" }),
    /* @__PURE__ */ jsx14("div", { className: "space-y-4", children: /* @__PURE__ */ jsx14(
      RadioGroup,
      {
        value: selectedOptionId,
        onValueChange: setSelectedOptionId,
        className: "space-y-3",
        children: shippingOptions.map((option) => {
          var _a, _b;
          return /* @__PURE__ */ jsxs7(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedOptionId === option.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedOptionId(option.id),
              children: [
                /* @__PURE__ */ jsx14(
                  RadioGroupItem,
                  {
                    value: option.id,
                    id: option.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ jsxs7("div", { className: "pr-10", children: [
                  /* @__PURE__ */ jsxs7("div", { className: "flex justify-between items-start mb-2", children: [
                    /* @__PURE__ */ jsxs7("div", { children: [
                      /* @__PURE__ */ jsx14("h3", { className: "font-medium text-foreground font-manrope", children: option.name }),
                      ((_a = option.data) == null ? void 0 : _a.description) && /* @__PURE__ */ jsx14("p", { className: "text-sm text-muted-foreground mt-1", children: String(option.data.description) })
                    ] }),
                    /* @__PURE__ */ jsx14("div", { className: "text-right", children: /* @__PURE__ */ jsx14("p", { className: "font-semibold text-foreground", children: option.calculated_price && option.calculated_price.calculated_amount ? formatPrice(
                      option.calculated_price.calculated_amount,
                      option.calculated_price.currency_code || "CAD"
                    ) : "Free" }) })
                  ] }),
                  ((_b = option.data) == null ? void 0 : _b.estimated_delivery) && /* @__PURE__ */ jsxs7("p", { className: "text-sm text-muted-foreground", children: [
                    "Estimated delivery: ",
                    String(option.data.estimated_delivery)
                  ] })
                ] })
              ]
            },
            option.id
          );
        })
      }
    ) }),
    cart && /* @__PURE__ */ jsxs7("div", { className: "bg-gray-50 rounded-lg p-4", children: [
      /* @__PURE__ */ jsx14("h3", { className: "font-medium mb-2 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ jsxs7("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx14("span", { children: "Subtotal:" }),
          /* @__PURE__ */ jsx14("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        selectedOptionId && /* @__PURE__ */ jsxs7("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx14("span", { children: "Shipping:" }),
          /* @__PURE__ */ jsx14("span", { children: (() => {
            const selectedOption = shippingOptions.find(
              (opt) => opt.id === selectedOptionId
            );
            return (selectedOption == null ? void 0 : selectedOption.calculated_price) && selectedOption.calculated_price.calculated_amount ? formatPrice(
              selectedOption.calculated_price.calculated_amount,
              selectedOption.calculated_price.currency_code || "CAD"
            ) : "Free";
          })() })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "border-t pt-1 flex justify-between font-medium", children: [
          /* @__PURE__ */ jsx14("span", { children: "Total:" }),
          /* @__PURE__ */ jsx14("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ jsx14("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx14("p", { className: "text-red-600", children: error }) }),
    /* @__PURE__ */ jsxs7("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx14(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: saving,
          children: "Back to Address"
        }
      ),
      /* @__PURE__ */ jsx14(
        Button,
        {
          onClick: handleContinue,
          className: "flex-1",
          disabled: !selectedOptionId || saving,
          children: saving ? "Saving..." : "Continue to Payment"
        }
      )
    ] })
  ] });
};

// src/components/Payment/index.tsx
import { useEffect as useEffect7, useState as useState8 } from "react";
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var Payment = ({ onBack, onComplete }) => {
  var _a;
  const { cart, unsetCart } = useCart();
  const [paymentProviders, setPaymentProviders] = useState8([]);
  const [selectedProviderId, setSelectedProviderId] = useState8("");
  const [loading, setLoading] = useState8(true);
  const [processing, setProcessing] = useState8(false);
  const [error, setError] = useState8(null);
  const [paymentStatus, setPaymentStatus] = useState8(null);
  useEffect7(() => {
    const fetchPaymentProviders = async () => {
      if (!(cart == null ? void 0 : cart.id)) {
        setError("No cart found");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const { payment_providers } = await sdk.store.payment.listPaymentProviders();
        setPaymentProviders(payment_providers);
        if (payment_providers.length === 1) {
          setSelectedProviderId(payment_providers[0].id);
        }
      } catch (err) {
        console.error("Error fetching payment providers:", err);
        setError("Failed to load payment methods");
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentProviders();
  }, [cart == null ? void 0 : cart.id]);
  const formatPrice = (amount, currencyCode) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode
    }).format(amount / 100);
  };
  const handleCompleteOrder = async () => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
    if (!selectedProviderId) {
      setError("Please select a payment method");
      return;
    }
    if (!(cart == null ? void 0 : cart.id)) {
      setError("No cart found");
      return;
    }
    try {
      setProcessing(true);
      setError(null);
      setPaymentStatus("Initializing payment...");
      console.log("Initializing payment session for provider:", selectedProviderId);
      const paymentCollectionResponse = await sdk.store.payment.initiatePaymentSession(cart, {
        provider_id: selectedProviderId
      });
      if (!paymentCollectionResponse.payment_collection) {
        throw new Error("Failed to initialize payment session");
      }
      const paymentCollection = paymentCollectionResponse.payment_collection;
      console.log("Payment collection created:", paymentCollection.id);
      const paymentSession = (_a2 = paymentCollection.payment_sessions) == null ? void 0 : _a2.find(
        (session) => session.provider_id === selectedProviderId
      );
      if (!paymentSession) {
        throw new Error(`Payment session not found for provider: ${selectedProviderId}`);
      }
      console.log("Payment session found:", paymentSession.id);
      if (selectedProviderId === "stripe") {
        setPaymentStatus("Processing payment...");
        console.log("Using Stripe payment session:", paymentSession.id);
      }
      setPaymentStatus("Creating order...");
      console.log("Completing cart:", cart.id);
      const completeResponse = await sdk.store.cart.complete(cart.id);
      if (completeResponse.type !== "order" || !completeResponse.order) {
        throw new Error("Failed to create order from cart");
      }
      const order = completeResponse.order;
      setPaymentStatus("Order completed successfully!");
      unsetCart();
      if (onComplete) {
        onComplete(order);
      } else {
        alert(`Order completed successfully! Order ID: ${order.id}`);
      }
    } catch (err) {
      console.error("Error completing order:", err);
      if (((_b = err.response) == null ? void 0 : _b.status) === 400) {
        setError("Invalid payment information. Please check your details and try again.");
      } else if (((_c = err.response) == null ? void 0 : _c.status) === 402) {
        setError("Payment declined. Please check your payment method and try again.");
      } else if (((_d = err.response) == null ? void 0 : _d.status) === 404) {
        setError("Cart not found. Please refresh the page and try again.");
      } else if (((_e = err.response) == null ? void 0 : _e.status) === 409) {
        setError("Cart has been modified. Please refresh and try again.");
      } else if ((_f = err.message) == null ? void 0 : _f.toLowerCase().includes("payment")) {
        setError("Payment processing failed. Please verify your payment method and try again.");
      } else if ((_g = err.message) == null ? void 0 : _g.toLowerCase().includes("inventory")) {
        setError("Some items in your cart are no longer available. Please refresh and try again.");
      } else if ((_h = err.message) == null ? void 0 : _h.toLowerCase().includes("session")) {
        setError("Payment session expired. Please try again.");
      } else if ((_i = err.message) == null ? void 0 : _i.toLowerCase().includes("network")) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError(err.message || "Failed to complete order. Please try again or contact support.");
      }
    } finally {
      setProcessing(false);
      if (!error) {
        setTimeout(() => setPaymentStatus(null), 3e3);
      }
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx15("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs8("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx15("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ jsx15("p", { className: "text-gray-600", children: "Loading payment options..." })
    ] }) });
  }
  if (error && paymentProviders.length === 0) {
    return /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ jsxs8("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ jsx15("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Payment Options" }),
        /* @__PURE__ */ jsx15("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ jsx15("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx15(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  if (paymentProviders.length === 0) {
    return /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ jsxs8("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ jsx15("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Payment Methods Available" }),
        /* @__PURE__ */ jsx15("p", { className: "text-yellow-600", children: "No payment methods are currently available. Please contact support." })
      ] }),
      /* @__PURE__ */ jsx15("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx15(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs8("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx15("h2", { className: "text-xl font-semibold font-manrope", children: "Payment Method" }),
    cart && /* @__PURE__ */ jsxs8("div", { className: "bg-gray-50 rounded-lg p-6", children: [
      /* @__PURE__ */ jsx15("h3", { className: "font-medium mb-4 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ jsx15("div", { className: "space-y-2 mb-4", children: (_a = cart.items) == null ? void 0 : _a.map((item) => {
        var _a2, _b, _c;
        return /* @__PURE__ */ jsxs8("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxs8("span", { children: [
            (_b = (_a2 = item.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.title,
            " ",
            ((_c = item.variant) == null ? void 0 : _c.title) && `(${item.variant.title})`,
            " \xD7 ",
            item.quantity
          ] }),
          /* @__PURE__ */ jsx15("span", { children: formatPrice(item.total || 0, cart.currency_code) })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ jsxs8("div", { className: "space-y-1 text-sm border-t pt-4", children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx15("span", { children: "Subtotal:" }),
          /* @__PURE__ */ jsx15("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx15("span", { children: "Shipping:" }),
          /* @__PURE__ */ jsx15("span", { children: cart.shipping_total !== void 0 ? formatPrice(cart.shipping_total, cart.currency_code) : "Free" })
        ] }),
        cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ jsxs8("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx15("span", { children: "Tax:" }),
          /* @__PURE__ */ jsx15("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "border-t pt-2 flex justify-between font-medium text-base", children: [
          /* @__PURE__ */ jsx15("span", { children: "Total:" }),
          /* @__PURE__ */ jsx15("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs8("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx15(Label, { children: "Select Payment Method" }),
      /* @__PURE__ */ jsx15(
        RadioGroup,
        {
          value: selectedProviderId,
          onValueChange: setSelectedProviderId,
          className: "space-y-3",
          children: paymentProviders.map((provider) => /* @__PURE__ */ jsxs8(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedProviderId === provider.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedProviderId(provider.id),
              children: [
                /* @__PURE__ */ jsx15(
                  RadioGroupItem,
                  {
                    value: provider.id,
                    id: provider.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ jsxs8("div", { className: "pr-10", children: [
                  /* @__PURE__ */ jsxs8("h3", { className: "font-medium text-foreground font-manrope", children: [
                    provider.id === "stripe" && "Credit/Debit Card",
                    provider.id === "paypal" && "PayPal",
                    provider.id === "manual" && "Manual Payment",
                    !["stripe", "paypal", "manual"].includes(provider.id) && provider.id.charAt(0).toUpperCase() + provider.id.slice(1)
                  ] }),
                  /* @__PURE__ */ jsxs8("p", { className: "text-sm text-muted-foreground mt-1", children: [
                    provider.id === "stripe" && "Pay securely with your credit or debit card via Stripe",
                    provider.id === "paypal" && "Pay with your PayPal account",
                    provider.id === "manual" && "Manual payment processing (for testing)",
                    !["stripe", "paypal", "manual"].includes(provider.id) && `Secure payment with ${provider.id}`
                  ] }),
                  provider.id === "stripe" && /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ jsxs8("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ jsx15("div", { className: "w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold", children: "Visa" }),
                      /* @__PURE__ */ jsx15("div", { className: "w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold", children: "MC" }),
                      /* @__PURE__ */ jsx15("div", { className: "w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold", children: "AE" })
                    ] }),
                    /* @__PURE__ */ jsx15("span", { className: "text-xs text-muted-foreground", children: "and more" })
                  ] })
                ] })
              ]
            },
            provider.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsx15("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs8("div", { className: "flex items-start", children: [
      /* @__PURE__ */ jsx15("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx15("svg", { className: "h-5 w-5 text-blue-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx15("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsx15("div", { className: "ml-3", children: /* @__PURE__ */ jsx15("p", { className: "text-sm text-blue-700", children: "Your payment information is processed securely. We do not store your payment details." }) })
    ] }) }),
    error && /* @__PURE__ */ jsx15("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx15("p", { className: "text-red-600", children: error }) }),
    paymentStatus && !error && /* @__PURE__ */ jsx15("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ jsxs8("div", { className: "flex items-center", children: [
      processing && /* @__PURE__ */ jsx15("div", { className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3" }),
      /* @__PURE__ */ jsx15("p", { className: "text-blue-700", children: paymentStatus })
    ] }) }),
    /* @__PURE__ */ jsxs8("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx15(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: processing,
          children: "Back to Shipping"
        }
      ),
      /* @__PURE__ */ jsx15(
        Button,
        {
          onClick: handleCompleteOrder,
          className: "flex-1",
          disabled: !selectedProviderId || processing,
          children: processing ? "Processing..." : `Complete Order (${(cart == null ? void 0 : cart.total) !== void 0 ? formatPrice(cart.total, cart.currency_code) : "..."})`
        }
      )
    ] })
  ] });
};

// src/components/ExpressCheckout/index.tsx
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
var ExpressCheckout = ({ productHandle, onOrderComplete }) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState9(false);
  const currentStep = searchParams.get("step");
  const isCartValid = useMemo(() => {
    var _a, _b;
    return ((_b = (_a = cart == null ? void 0 : cart.items) == null ? void 0 : _a[0]) == null ? void 0 : _b.product_handle) === productHandle;
  }, [cart, productHandle]);
  const activeStep = currentStep === "product" || currentStep === "address" || currentStep === "shipping" || currentStep === "payment" ? currentStep : "product";
  const navigateToStep = (step) => {
    setIsLoading(true);
    const url = step === "product" ? `/${productHandle}` : buildUrl(`/${productHandle}`, { step });
    router.push(url);
    setIsLoading(false);
  };
  useEffect8(() => {
    var _a;
    if (!cart) {
      return;
    }
    if (activeStep !== "product" && !isCartValid) {
      navigateToStep("product");
      return;
    }
    if (activeStep === "shipping" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address))) {
      navigateToStep("address");
      return;
    }
    if (activeStep === "payment") {
      if (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address)) {
        navigateToStep("address");
        return;
      }
      if (!((_a = cart == null ? void 0 : cart.shipping_methods) == null ? void 0 : _a.length)) {
        navigateToStep("shipping");
        return;
      }
    }
  }, [isCartValid, activeStep, cart, productHandle]);
  const handleOrderComplete = (order) => {
    if (onOrderComplete) {
      onOrderComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
      navigateToStep("product");
    }
  };
  const renderStepContent = () => {
    switch (activeStep) {
      case "product":
        return /* @__PURE__ */ jsx16(
          ProductSelection,
          {
            productHandle,
            onContinue: () => navigateToStep("address")
          }
        );
      case "address":
        return /* @__PURE__ */ jsx16(
          AddressForm,
          {
            onContinue: () => navigateToStep("shipping"),
            onBack: () => navigateToStep("product")
          }
        );
      case "shipping":
        return /* @__PURE__ */ jsx16(
          ShippingOptions,
          {
            onContinue: () => navigateToStep("payment"),
            onBack: () => navigateToStep("address")
          }
        );
      case "payment":
        return /* @__PURE__ */ jsx16(
          Payment,
          {
            onBack: () => navigateToStep("shipping"),
            onComplete: handleOrderComplete
          }
        );
      default:
        return null;
    }
  };
  const renderStepIndicator = () => {
    const steps = ["product", "address", "shipping", "payment"];
    const stepNames = {
      product: "Product",
      address: "Address",
      shipping: "Shipping",
      payment: "Payment"
    };
    return /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-between mb-6", children: steps.map((step, index) => {
      const isActive = step === activeStep;
      const isCompleted = steps.indexOf(activeStep) > index;
      return /* @__PURE__ */ jsxs9("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx16(
          "div",
          {
            className: `
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${isActive ? "bg-blue-600 text-white" : isCompleted ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}
                `,
            children: isCompleted ? "\u2713" : index + 1
          }
        ),
        /* @__PURE__ */ jsx16("span", { className: `ml-2 text-sm ${isActive ? "font-medium" : ""}`, children: stepNames[step] }),
        index < steps.length - 1 && /* @__PURE__ */ jsx16("div", { className: "w-8 h-px bg-gray-300 mx-4" })
      ] }, step);
    }) });
  };
  return /* @__PURE__ */ jsxs9("div", { className: "max-w-2xl mx-auto p-6", children: [
    renderStepIndicator(),
    renderStepContent()
  ] });
};

// src/components/Marketplace/index.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var Marketplace = ({
  initialView = "catalog",
  initialProductHandle,
  onOrderComplete,
  catalogOptions = {},
  headerContent
}) => {
  const [currentView, setCurrentView] = useState10("catalog");
  const [currentProductHandle, setCurrentProductHandle] = useState10("");
  useEffect9(() => {
    const urlView = getMarketplaceView();
    const urlProductHandle = getProductHandle();
    const view = urlView !== "catalog" ? urlView : initialView;
    const productHandle = urlProductHandle || initialProductHandle || "";
    setCurrentView(view);
    setCurrentProductHandle(productHandle);
  }, [initialView, initialProductHandle]);
  useEffect9(() => {
    const handleRouteChange = () => {
      const view = getMarketplaceView();
      const productHandle = getProductHandle() || "";
      setCurrentView(view);
      setCurrentProductHandle(productHandle);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("routechange", handleRouteChange);
      window.addEventListener("popstate", handleRouteChange);
      return () => {
        window.removeEventListener("routechange", handleRouteChange);
        window.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, []);
  const handleProductSelect = (productHandle) => {
    navigateToProduct(productHandle);
  };
  const handleBackToCatalog = () => {
    navigateToCatalog();
  };
  const handleOrderComplete = (order) => {
    if (onOrderComplete) {
      onOrderComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
      handleBackToCatalog();
    }
  };
  const renderContent = () => {
    switch (currentView) {
      case "catalog":
        return /* @__PURE__ */ jsx17(
          ProductCatalog,
          {
            onProductSelect: handleProductSelect,
            searchPlaceholder: catalogOptions.searchPlaceholder,
            showSearch: catalogOptions.showSearch,
            showCategories: catalogOptions.showCategories,
            productsPerPage: catalogOptions.productsPerPage
          }
        );
      case "product":
        if (!currentProductHandle) {
          return /* @__PURE__ */ jsxs10("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ jsx17("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ jsx17("svg", { className: "mx-auto h-12 w-12", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx17("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" }) }) }),
            /* @__PURE__ */ jsx17("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "Product Not Found" }),
            /* @__PURE__ */ jsx17("p", { className: "text-muted-foreground mb-4", children: "The requested product could not be found." }),
            /* @__PURE__ */ jsx17(Button, { onClick: handleBackToCatalog, children: "Browse Products" })
          ] });
        }
        return /* @__PURE__ */ jsxs10("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 pb-4 border-b", children: [
            /* @__PURE__ */ jsxs10(
              Button,
              {
                variant: "secondary",
                size: "sm",
                onClick: handleBackToCatalog,
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx17("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx17("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }),
                  "Back to Catalog"
                ]
              }
            ),
            /* @__PURE__ */ jsxs10("span", { className: "text-sm text-gray-500", children: [
              "Product: ",
              currentProductHandle
            ] })
          ] }),
          /* @__PURE__ */ jsx17(
            ExpressCheckout,
            {
              productHandle: currentProductHandle,
              onOrderComplete: handleOrderComplete
            }
          )
        ] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs10("div", { className: "space-y-6", children: [
    headerContent && /* @__PURE__ */ jsx17("div", { className: "border-b pb-4", children: headerContent }),
    renderContent()
  ] });
};

// src/providers/fonts.tsx
import { createContext as createContext3, useContext as useContext3 } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var FontContext = createContext3({
  fontBrand: "system-ui, -apple-system, sans-serif",
  fontUi: "system-ui, -apple-system, sans-serif"
});
var FontProvider = ({
  children,
  fontBrand = "system-ui, -apple-system, sans-serif",
  fontUi = "system-ui, -apple-system, sans-serif"
}) => {
  const value = {
    fontBrand: fontBrand || fontUi || "system-ui, -apple-system, sans-serif",
    fontUi: fontUi || "system-ui, -apple-system, sans-serif"
  };
  return /* @__PURE__ */ jsx18(FontContext.Provider, { value, children });
};
var useFont = () => {
  const context = useContext3(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};

// src/components/ui/typography.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var BrandText = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "span",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var UIText = ({ children, className, style, ...props }) => {
  const { fontUi } = useFont();
  return /* @__PURE__ */ jsx19(
    "span",
    {
      className,
      style: {
        fontFamily: fontUi,
        ...style
      },
      ...props,
      children
    }
  );
};
var H1 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h1",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H2 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h2",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H3 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h3",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H4 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h4",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H5 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h5",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var H6 = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ jsx19(
    "h6",
    {
      className,
      style: {
        fontFamily: fontBrand,
        ...style
      },
      ...props,
      children
    }
  );
};
var P = ({ children, className, style, ...props }) => {
  const { fontUi } = useFont();
  return /* @__PURE__ */ jsx19(
    "p",
    {
      className,
      style: {
        fontFamily: fontUi,
        ...style
      },
      ...props,
      children
    }
  );
};

// src/components/OAGExpressMarketplace/index.tsx
import { useEffect as useEffect10, useState as useState11 } from "react";
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
var OAGExpressMarketplace = ({
  productHandle,
  className,
  backendUrl,
  publishableKey,
  onOrderComplete,
  initialView = "catalog",
  catalogOptions,
  headerContent,
  title = "OpticAg Marketplace",
  fontBrand,
  fontUi
}) => {
  const [isConfigured, setIsConfigured] = useState11(false);
  useEffect10(() => {
    if (backendUrl || publishableKey) {
      updateSDKConfig({
        backendUrl,
        publishableKey
      });
    }
    setIsConfigured(true);
  }, [backendUrl, publishableKey]);
  if (!isConfigured) {
    return /* @__PURE__ */ jsx20(FontProvider, { fontBrand, fontUi, children: /* @__PURE__ */ jsx20(Layout, { className, children: /* @__PURE__ */ jsx20("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx20(H2, { className: "text-xl font-semibold text-muted-foreground mb-2", children: "Initializing Marketplace..." }),
      /* @__PURE__ */ jsx20("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" })
    ] }) }) }) });
  }
  const defaultHeaderContent = /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx20(H1, { className: "text-3xl font-bold text-foreground", children: title }),
    /* @__PURE__ */ jsx20(P, { className: "text-muted-foreground mt-2", children: "Discover and purchase agricultural products" })
  ] });
  return /* @__PURE__ */ jsx20(FontProvider, { fontBrand, fontUi, children: /* @__PURE__ */ jsx20(Layout, { className, children: /* @__PURE__ */ jsx20(
    Marketplace,
    {
      initialView,
      initialProductHandle: productHandle,
      onOrderComplete,
      catalogOptions,
      headerContent: headerContent || defaultHeaderContent
    }
  ) }) });
};
var OAGExpressMarketplace_default = OAGExpressMarketplace;

// src/components/Router/index.tsx
import { useEffect as useEffect11, useMemo as useMemo2 } from "react";
import { Fragment, jsx as jsx21 } from "react/jsx-runtime";
var Router = ({ handle }) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentStep = searchParams.get("step");
  const isCartValid = useMemo2(() => {
    var _a, _b;
    return ((_b = (_a = cart == null ? void 0 : cart.items) == null ? void 0 : _a[0]) == null ? void 0 : _b.product_handle) === handle;
  }, [cart, handle]);
  const activeTab = currentStep === "product" || currentStep === "address" || currentStep === "shipping" || currentStep === "payment" ? currentStep : "product";
  useEffect11(() => {
    var _a;
    if (!cart) {
      return;
    }
    if (activeTab !== "product" && !isCartValid) {
      return router.push(`/${handle}`);
    }
    if (activeTab === "shipping" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address))) {
      return router.push(buildUrl(`/${handle}`, { step: "address" }));
    }
    if (activeTab === "payment" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address) || !((_a = cart == null ? void 0 : cart.shipping_methods) == null ? void 0 : _a.length))) {
      return router.push(buildUrl(`/${handle}`, { step: "shipping" }));
    }
  }, [isCartValid, activeTab, cart, handle, router]);
  return /* @__PURE__ */ jsx21(Fragment, {});
};
export {
  AddressForm,
  BrandText,
  CartProvider,
  ExpressCheckout,
  FontProvider,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Layout,
  Marketplace,
  OAGExpressMarketplace_default as OAGExpressMarketplace,
  P,
  Payment,
  ProductCatalog,
  ProductSelection,
  RegionProvider,
  Router,
  SecondCol,
  ShippingOptions,
  UIText,
  buildUrl,
  getMarketplaceView,
  getProductHandle,
  navigateToCatalog,
  navigateToProduct,
  sdk,
  useCart,
  useFont,
  useRegion,
  useRouter,
  useSearchParams
};
