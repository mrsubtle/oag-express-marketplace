"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  AddressForm: () => AddressForm,
  BrandText: () => BrandText,
  CartProvider: () => CartProvider,
  ExpressCheckout: () => ExpressCheckout,
  FontProvider: () => FontProvider,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Layout: () => Layout,
  Marketplace: () => Marketplace,
  OAGExpressMarketplace: () => OAGExpressMarketplace_default,
  P: () => P,
  Payment: () => Payment,
  ProductCatalog: () => ProductCatalog,
  ProductSelection: () => ProductSelection,
  RegionProvider: () => RegionProvider,
  Router: () => Router,
  SecondCol: () => SecondCol,
  ShippingOptions: () => ShippingOptions,
  StorefrontProvider: () => StorefrontProvider,
  UIText: () => UIText,
  buildUrl: () => buildUrl,
  getMarketplaceView: () => getMarketplaceView,
  getProductHandle: () => getProductHandle,
  navigateToCatalog: () => navigateToCatalog,
  navigateToProduct: () => navigateToProduct,
  sdk: () => sdk,
  useCart: () => useCart,
  useFont: () => useFont,
  useRegion: () => useRegion,
  useRouter: () => useRouter,
  useSearchParams: () => useSearchParams,
  useStorefront: () => useStorefront
});
module.exports = __toCommonJS(index_exports);

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
var import_ui2 = require("@medusajs/ui");

// src/providers/region.tsx
var import_react = require("react");

// src/lib/sdk.ts
var import_js_sdk = __toESM(require("@medusajs/js-sdk"));
var currentConfig = {
  backendUrl: "http://localhost:9000",
  publishableKey: void 0
};
var _a;
var sdkInstance = new import_js_sdk.default({
  baseUrl: currentConfig.backendUrl,
  debug: typeof process !== "undefined" && ((_a = process.env) == null ? void 0 : _a.NODE_ENV) === "development",
  publishableKey: currentConfig.publishableKey
});
var updateSDKConfig = (config) => {
  var _a2;
  if (config.backendUrl) {
    currentConfig.backendUrl = config.backendUrl;
  }
  if (config.publishableKey) {
    currentConfig.publishableKey = config.publishableKey;
  }
  sdkInstance = new import_js_sdk.default({
    baseUrl: currentConfig.backendUrl,
    debug: typeof process !== "undefined" && ((_a2 = process.env) == null ? void 0 : _a2.NODE_ENV) === "development",
    publishableKey: currentConfig.publishableKey
  });
};
var sdk = new Proxy({}, {
  get(_, prop) {
    return sdkInstance[prop];
  }
});

// src/providers/region.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var RegionContext = (0, import_react.createContext)(null);
var RegionProvider = ({ children }) => {
  const [regions, setRegions] = (0, import_react.useState)([]);
  const [region, setRegion] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (regions.length) {
      return;
    }
    sdk.store.region.list().then(({ regions: regions2 }) => {
      setRegions(regions2);
      setRegion(regions2[0]);
    });
  }, []);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const context = (0, import_react.useContext)(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return context;
};

// src/components/SecondCol/index.tsx
var import_ui = require("@medusajs/ui");

// src/providers/cart.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var CartContext = (0, import_react2.createContext)(null);
var CartProvider = ({ children }) => {
  const [cart, setCart] = (0, import_react2.useState)();
  const { region } = useRegion();
  (0, import_react2.useEffect)(() => {
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
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      }).then(({ cart: dataCart }) => {
        setCart(dataCart);
      });
    }
  }, [cart, region]);
  (0, import_react2.useEffect)(() => {
    if (!cart || !region || cart.region_id === region.id) {
      return;
    }
    sdk.store.cart.update(cart.id, {
      region_id: region.id
    }, {
      fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
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
    let currentCart = cart;
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
        quantity
      },
      {
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      }
    );
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
    const cartFields = {
      fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
    };
    if (updateData) {
      returnedCart = (await sdk.store.cart.update(cart.id, updateData, cartFields)).cart;
    }
    if (shippingMethodData) {
      returnedCart = (await sdk.store.cart.addShippingMethod(cart.id, shippingMethodData, cartFields)).cart;
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
      },
      {
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      }
    );
    setCart(dataCart);
    return dataCart;
  };
  const unsetCart = () => {
    localStorage.removeItem("cart_id");
    setCart(void 0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  const context = (0, import_react2.useContext)(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// src/lib/price-utils.ts
var formatPrice = (amount, currencyCode = "CAD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode
  }).format(amount);
};

// src/components/ui/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// src/components/SecondCol/index.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var SecondCol = ({ onCheckoutClick }) => {
  var _a2;
  const { region, regions, setRegion } = useRegion();
  const { cart } = useCart();
  console.log("Cart data:", cart);
  console.log("Cart items:", cart == null ? void 0 : cart.items);
  if ((_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2[0]) {
    console.log("First item structure:", cart.items[0]);
    console.log("First item variant:", cart.items[0].variant);
    console.log("First item unit_price:", cart.items[0].unit_price);
    console.log("First item subtotal:", cart.items[0].subtotal);
    console.log("First item total:", cart.items[0].total);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: (0, import_ui.clx)("flex flex-0 flex-col gap-6", "w-xs"), children: [
    cart && cart.items && cart.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg border p-4 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "font-medium text-lg font-manrope", children: "Cart Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-3", children: cart.items.map((item) => {
        var _a3, _b, _c, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-start gap-3", children: [
          ((_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.thumbnail) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "img",
            {
              src: item.variant.product.thumbnail,
              alt: item.variant.product.title || "Product",
              className: "w-16 h-16 object-cover rounded-md bg-gray-100"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "text-sm font-medium truncate font-manrope", children: (_d = (_c = item.variant) == null ? void 0 : _c.product) == null ? void 0 : _d.title }),
            ((_e = item.variant) == null ? void 0 : _e.title) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-gray-500", children: item.variant.title }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "text-xs text-gray-500", children: [
                "Qty: ",
                item.quantity
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-sm font-medium", children: formatPrice(
                item.subtotal || item.total || (item.unit_price || 0) * item.quantity,
                cart.currency_code
              ) })
            ] })
          ] })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "border-t pt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Subtotal:" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        cart.shipping_total !== void 0 && cart.shipping_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Shipping:" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: formatPrice(cart.shipping_total, cart.currency_code) })
        ] }),
        cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Tax:" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "border-t pt-2 flex justify-between font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Total:" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] }),
        onCheckoutClick && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          Button,
          {
            onClick: onCheckoutClick,
            className: "w-full mt-4 flex items-center justify-center gap-2",
            size: "sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.ShoppingCart, { className: "w-4 h-4" }),
              "Checkout"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-white rounded-lg border p-4 space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "font-medium font-manrope", children: "Settings" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-sm text-ui-fg-muted", children: "Region:" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "select",
          {
            value: (region == null ? void 0 : region.id) || "",
            onChange: (e) => {
              const selectedRegion = regions.find(
                (r) => r.id === e.target.value
              );
              setRegion(selectedRegion);
            },
            className: "w-full p-2 text-sm border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "", children: "Select Region" }),
              regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: r.id, children: r.name }, r.id))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-center space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-ui-fg-subtle", children: "Powered by" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "img",
        {
          src: "https://opticag.com/img/brand/OAG_Logo_f_dark.svg",
          alt: "OpticAg",
          width: 32,
          height: 19,
          className: "mx-auto"
        }
      )
    ] })
  ] });
};

// src/lib/routing.ts
var import_react3 = require("react");
var _baseRoute = "";
var setBaseRoute = (baseRoute) => {
  _baseRoute = baseRoute;
};
var getBaseRoute = () => _baseRoute;
var useSearchParams = () => {
  const [searchParams, setSearchParams] = (0, import_react3.useState)(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  });
  const updateSearchParams = (0, import_react3.useCallback)((newParams) => {
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.pushState({}, "", newUrl);
      setSearchParams(new URLSearchParams(newParams));
    }
  }, []);
  (0, import_react3.useEffect)(() => {
    const handleUrlChange = () => {
      if (typeof window !== "undefined") {
        setSearchParams(new URLSearchParams(window.location.search));
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handleUrlChange);
      window.addEventListener("routechange", handleUrlChange);
      return () => {
        window.removeEventListener("popstate", handleUrlChange);
        window.removeEventListener("routechange", handleUrlChange);
      };
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
  const [currentPath, setCurrentPath] = (0, import_react3.useState)(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  });
  const push = (0, import_react3.useCallback)((url) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", url);
      setCurrentPath(window.location.pathname);
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);
  const replace = (0, import_react3.useCallback)((url) => {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", url);
      setCurrentPath(window.location.pathname);
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);
  (0, import_react3.useEffect)(() => {
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
  const currentPath = window.location.pathname;
  const baseRoute = getBaseRoute();
  const relativePath = baseRoute && currentPath.startsWith(baseRoute) ? currentPath.substring(baseRoute.length) : currentPath;
  const pathSegments = relativePath.split("/").filter(Boolean);
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
var _navigationInProgress = false;
var navigateToProduct = (productHandle, step) => {
  if (typeof window === "undefined") return;
  if (_navigationInProgress) {
    return;
  }
  _navigationInProgress = true;
  const baseRoute = getBaseRoute();
  const basePath = baseRoute.endsWith("/") ? baseRoute.slice(0, -1) : baseRoute;
  const url = step ? buildUrl(`${basePath}/${productHandle}`, { step }) : `${basePath}/${productHandle}?view=product`;
  console.log("navigateToProduct - final URL:", url);
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
  console.log("navigateToProduct - dispatched routechange event");
  setTimeout(() => {
    _navigationInProgress = false;
  }, 200);
};
var navigateToCatalog = () => {
  if (typeof window === "undefined") return;
  if (_navigationInProgress) {
    return;
  }
  _navigationInProgress = true;
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.delete("step");
  currentParams.delete("view");
  const baseRoute = getBaseRoute();
  const baseUrl = baseRoute || "/";
  const url = currentParams.toString() ? `${baseUrl}?${currentParams.toString()}` : baseUrl;
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
  setTimeout(() => {
    _navigationInProgress = false;
  }, 200);
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

// src/components/Layout/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function LayoutContent({ children, className }) {
  const { cart } = useCart();
  const handleCheckout = () => {
    var _a2, _b;
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      const productHandle = (_b = (_a2 = firstProduct.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.handle;
      if (productHandle) {
        navigateToProduct(productHandle, "address");
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: (0, import_ui2.clx)(
        "flex flex-1 gap-2 pb-4",
        "lg:max-w-[758px] lg:mx-auto md:flex-row flex-col w-full mx-4"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex flex-1 flex-col gap-2", children }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SecondCol, { onCheckoutClick: handleCheckout })
      ]
    }
  );
}
function Layout({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: (0, import_ui2.clx)("font-inter bg-ui-bg-subtle w-full", className), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: (0, import_ui2.clx)("flex justify-center items-start w-full"), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(RegionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LayoutContent, { className, children }) }) }) }) });
}

// src/components/Marketplace/index.tsx
var import_react10 = require("react");

// src/components/ProductCatalog/index.tsx
var import_react4 = require("react");

// src/components/ui/input.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var ProductCatalog = ({
  onProductSelect,
  onCheckoutClick,
  searchPlaceholder = "Search products...",
  showSearch = true,
  showCategories = true,
  productsPerPage = 12
}) => {
  var _a2;
  const { region } = useRegion();
  const { cart } = useCart();
  const [products, setProducts] = (0, import_react4.useState)([]);
  const [categories, setCategories] = (0, import_react4.useState)([]);
  const [loading, setLoading] = (0, import_react4.useState)(true);
  const [searchQuery, setSearchQuery] = (0, import_react4.useState)("");
  const [committedSearchQuery, setCommittedSearchQuery] = (0, import_react4.useState)("");
  const [selectedCategory, setSelectedCategory] = (0, import_react4.useState)(null);
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(1);
  const [hasMore, setHasMore] = (0, import_react4.useState)(false);
  const [error, setError] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
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
        if (committedSearchQuery.trim()) {
          searchParams.q = committedSearchQuery.trim();
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
  }, [
    region,
    committedSearchQuery,
    selectedCategory,
    currentPage,
    productsPerPage
  ]);
  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };
  const handleSearch = () => {
    setCommittedSearchQuery(searchQuery);
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
  const formatProductPrice = (variants) => {
    if (!variants || variants.length === 0) return "Price unavailable";
    const firstVariant = variants[0];
    if (!firstVariant.calculated_price || !firstVariant.calculated_price.calculated_amount)
      return "Price unavailable";
    return formatPrice(
      firstVariant.calculated_price.calculated_amount,
      firstVariant.calculated_price.currency_code || "CAD"
    );
  };
  if (loading && products.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-gray-600", children: "Loading products..." })
    ] }) });
  }
  if (error && products.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Products" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-red-600", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-4", children: [
      showSearch && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Input,
          {
            type: "search",
            placeholder: searchPlaceholder,
            value: searchQuery,
            onChange: (e) => handleSearchInputChange(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") handleSearch();
            },
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Button,
          {
            type: "button",
            variant: "default",
            onClick: handleSearch,
            "aria-label": "Search",
            size: "icon",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Search, { className: "w-5 h-5" })
          }
        )
      ] }),
      showCategories && categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-sm font-medium text-muted-foreground font-manrope", children: "Categories" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            Button,
            {
              variant: selectedCategory === null ? "default" : "secondary",
              size: "sm",
              onClick: () => handleCategorySelect(null),
              children: "All Products"
            }
          ),
          categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    (committedSearchQuery || selectedCategory) && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "text-sm text-gray-600", children: [
      committedSearchQuery && `Results for "${committedSearchQuery}"`,
      committedSearchQuery && selectedCategory && " in ",
      selectedCategory && ((_a2 = categories.find((c) => c.id === selectedCategory)) == null ? void 0 : _a2.name),
      products.length > 0 && ` (${products.length} products)`
    ] }),
    products.length === 0 && !loading ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "svg",
        {
          className: "mx-auto h-12 w-12",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "No products found" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-muted-foreground", children: committedSearchQuery || selectedCategory ? "Try adjusting your search or filters" : "No products are available at the moment" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "div",
      {
        className: "flex flex-col flex-1 bg-white border border-[#fafafa] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
        onClick: () => onProductSelect(product.handle),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "aspect-square bg-gray-100", children: product.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "img",
            {
              src: product.thumbnail,
              alt: product.title,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-full h-full flex items-center justify-center text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "svg",
            {
              className: "h-16 w-16",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-1 flex-col p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "flex-1 font-medium text-foreground mb-2 line-clamp-2 font-manrope", children: product.title }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col flex-1 gap-6 items-start justify-start", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-lg font-semibold", children: formatProductPrice(product.variants) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { size: "sm", className: "w-full shadow-lg", children: "View Details" })
            ] })
          ] })
        ]
      },
      product.id
    )) }),
    hasMore && !loading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { onClick: loadMore, variant: "secondary", children: "Load More Products" }) }),
    loading && products.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-center py-4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" }) })
  ] });
};

// src/components/ExpressCheckout/index.tsx
var import_react9 = require("react");

// src/components/ProductSelection/index.tsx
var import_react5 = require("react");

// src/components/ui/label.tsx
var React3 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime8 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/select.tsx
var React4 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React4.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectScrollUpButton, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ProductSelection/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var ProductSelection = ({
  productHandle,
  onContinue
}) => {
  var _a2;
  const [product, setProduct] = (0, import_react5.useState)(null);
  const [selectedVariant, setSelectedVariant] = (0, import_react5.useState)(null);
  const [quantity, setQuantity] = (0, import_react5.useState)(1);
  const [loading, setLoading] = (0, import_react5.useState)(true);
  const [addingToCart, setAddingToCart] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)(null);
  const { addToCart, cart } = useCart();
  const { region } = useRegion();
  (0, import_react5.useEffect)(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const { products } = await sdk.store.product.list({
          handle: productHandle,
          fields: "id,title,handle,description,thumbnail,status,created_at,updated_at",
          region_id: region == null ? void 0 : region.id
        });
        if (!products || products.length === 0) {
          throw new Error(`Product with handle "${productHandle}" not found`);
        }
        const foundProduct = products[0];
        const { product: productData } = await sdk.store.product.retrieve(
          foundProduct.id,
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
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-gray-600", children: "Loading product details..." })
    ] }) });
  }
  if (error && !product) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Product" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-red-600", children: error })
    ] });
  }
  if (!product) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-yellow-800 font-medium mb-2", children: "Product Not Found" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-yellow-600", children: "The requested product could not be found." })
    ] });
  }
  const currentProductInCart = (_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2.find(
    (item) => {
      var _a3, _b;
      return ((_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.handle) === productHandle;
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { className: "text-2xl font-bold text-foreground font-manrope", children: product.title }),
        product.description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-muted-foreground mt-2", children: product.description })
      ] }),
      product.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "img",
        {
          src: product.thumbnail,
          alt: product.title,
          className: "w-full h-full object-cover"
        }
      ) }),
      product.variants && product.variants.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Label, { htmlFor: "variant-select", children: "Select Variant" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          Select,
          {
            value: (selectedVariant == null ? void 0 : selectedVariant.id) || "",
            onValueChange: (value) => {
              var _a3;
              const variant = (_a3 = product.variants) == null ? void 0 : _a3.find((v) => v.id === value);
              setSelectedVariant(variant || null);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectValue, { placeholder: "Choose a variant" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectContent, { children: product.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectItem, { value: variant.id, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: variant.title }),
                variant.calculated_price && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ml-2 font-medium", children: formatPrice(
                  variant.calculated_price.calculated_amount || 0,
                  variant.calculated_price.currency_code || "CAD"
                ) })
              ] }) }, variant.id)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Label, { htmlFor: "quantity", children: "Quantity" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
        (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-sm text-gray-500", children: [
          selectedVariant.inventory_quantity,
          " available"
        ] })
      ] }),
      (selectedVariant == null ? void 0 : selectedVariant.calculated_price) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "p-4 bg-gray-50 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-lg font-medium", children: "Price:" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-2xl font-bold text-green-600", children: formatPrice(
          (selectedVariant.calculated_price.calculated_amount || 0) * quantity,
          selectedVariant.calculated_price.currency_code || "CAD"
        ) })
      ] }) })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-red-600", children: error }) }),
    currentProductInCart && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "p-4 bg-green-50 border border-green-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-green-700", children: [
      "\u2713 This product is already in your cart (",
      currentProductInCart.quantity,
      " items)"
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Button,
        {
          onClick: handleAddToCart,
          disabled: !selectedVariant || addingToCart || quantity < 1,
          className: "flex-1",
          size: "lg",
          children: addingToCart ? "Adding to Cart..." : currentProductInCart ? "Update Cart" : "Add to Cart"
        }
      ),
      currentProductInCart && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_react6 = require("react");

// src/components/ui/checkbox.tsx
var React5 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Checkbox = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/AddressForm/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var AddressForm = ({ onContinue, onBack }) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const { updateCart, cart } = useCart();
  const { region } = useRegion();
  const [shippingAddress, setShippingAddress] = (0, import_react6.useState)({
    first_name: ((_a2 = cart == null ? void 0 : cart.shipping_address) == null ? void 0 : _a2.first_name) || "",
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
  const [billingAddress, setBillingAddress] = (0, import_react6.useState)({
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
  const [sameAsShipping, setSameAsShipping] = (0, import_react6.useState)(
    (cart == null ? void 0 : cart.billing_address) ? false : true
  );
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const [errors, setErrors] = (0, import_react6.useState)({});
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
      console.log("AddressForm calling onContinue");
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-xl font-semibold font-manrope", children: "Shipping Address" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_first_name", children: "First Name *" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Input,
            {
              id: "shipping_first_name",
              value: shippingAddress.first_name,
              onChange: (e) => updateShippingAddress("first_name", e.target.value),
              className: errors.shipping_first_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_first_name && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_first_name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_last_name", children: "Last Name *" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Input,
            {
              id: "shipping_last_name",
              value: shippingAddress.last_name,
              onChange: (e) => updateShippingAddress("last_name", e.target.value),
              className: errors.shipping_last_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_last_name && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_last_name })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_company", children: "Company" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Input,
          {
            id: "shipping_company",
            value: shippingAddress.company,
            onChange: (e) => updateShippingAddress("company", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_address_1", children: "Address *" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Input,
          {
            id: "shipping_address_1",
            value: shippingAddress.address_1,
            onChange: (e) => updateShippingAddress("address_1", e.target.value),
            className: errors.shipping_address_1 ? "border-red-300" : ""
          }
        ),
        errors.shipping_address_1 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_address_1 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_address_2", children: "Address Line 2" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Input,
          {
            id: "shipping_address_2",
            value: shippingAddress.address_2,
            onChange: (e) => updateShippingAddress("address_2", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_city", children: "City *" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Input,
            {
              id: "shipping_city",
              value: shippingAddress.city,
              onChange: (e) => updateShippingAddress("city", e.target.value),
              className: errors.shipping_city ? "border-red-300" : ""
            }
          ),
          errors.shipping_city && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_city })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_postal_code", children: "Postal Code *" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Input,
            {
              id: "shipping_postal_code",
              value: shippingAddress.postal_code,
              onChange: (e) => updateShippingAddress("postal_code", e.target.value),
              className: errors.shipping_postal_code ? "border-red-300" : ""
            }
          ),
          errors.shipping_postal_code && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_postal_code })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_province", children: "State/Province" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Input,
            {
              id: "shipping_province",
              value: shippingAddress.province,
              onChange: (e) => updateShippingAddress("province", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_country", children: "Country *" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            "select",
            {
              id: "shipping_country",
              value: shippingAddress.country_code,
              onChange: (e) => updateShippingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.shipping_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.shipping_country_code && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_country_code })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "shipping_phone", children: "Phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Checkbox,
          {
            id: "same_as_shipping",
            checked: sameAsShipping,
            onCheckedChange: (checked) => setSameAsShipping(!!checked)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "same_as_shipping", children: "Billing address is the same as shipping address" })
      ] }),
      !sameAsShipping && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "text-lg font-medium font-manrope", children: "Billing Address" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "billing_first_name", children: "First Name *" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              Input,
              {
                id: "billing_first_name",
                value: billingAddress.first_name,
                onChange: (e) => updateBillingAddress("first_name", e.target.value),
                className: errors.billing_first_name ? "border-red-300" : ""
              }
            ),
            errors.billing_first_name && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_first_name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "billing_last_name", children: "Last Name *" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              Input,
              {
                id: "billing_last_name",
                value: billingAddress.last_name,
                onChange: (e) => updateBillingAddress("last_name", e.target.value),
                className: errors.billing_last_name ? "border-red-300" : ""
              }
            ),
            errors.billing_last_name && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_last_name })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "billing_address_1", children: "Address *" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Input,
            {
              id: "billing_address_1",
              value: billingAddress.address_1,
              onChange: (e) => updateBillingAddress("address_1", e.target.value),
              className: errors.billing_address_1 ? "border-red-300" : ""
            }
          ),
          errors.billing_address_1 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_address_1 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "billing_city", children: "City *" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              Input,
              {
                id: "billing_city",
                value: billingAddress.city,
                onChange: (e) => updateBillingAddress("city", e.target.value),
                className: errors.billing_city ? "border-red-300" : ""
              }
            ),
            errors.billing_city && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_city })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "billing_postal_code", children: "Postal Code *" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              Input,
              {
                id: "billing_postal_code",
                value: billingAddress.postal_code,
                onChange: (e) => updateBillingAddress("postal_code", e.target.value),
                className: errors.billing_postal_code ? "border-red-300" : ""
              }
            ),
            errors.billing_postal_code && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_postal_code })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: "billing_country", children: "Country *" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            "select",
            {
              id: "billing_country",
              value: billingAddress.country_code,
              onChange: (e) => updateBillingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.billing_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.billing_country_code && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_country_code })
        ] })
      ] })
    ] }),
    errors.general && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-red-600", children: errors.general }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var import_react7 = require("react");

// src/components/ui/radio-group.tsx
var React6 = __toESM(require("react"));
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var RadioGroup = React6.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react5.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ShippingOptions/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var ShippingOptions = ({
  onContinue,
  onBack
}) => {
  const { cart, updateCart } = useCart();
  const [shippingOptions, setShippingOptions] = (0, import_react7.useState)([]);
  const [selectedOptionId, setSelectedOptionId] = (0, import_react7.useState)("");
  const [loading, setLoading] = (0, import_react7.useState)(true);
  const [saving, setSaving] = (0, import_react7.useState)(false);
  const [error, setError] = (0, import_react7.useState)(null);
  (0, import_react7.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-gray-600", children: "Loading shipping options..." })
    ] }) });
  }
  if (error && shippingOptions.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Shipping Options" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  if (shippingOptions.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Shipping Options Available" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-yellow-600", children: "No shipping options are available for your address. Please check your address or contact support." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-xl font-semibold font-manrope", children: "Choose Shipping Method" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      RadioGroup,
      {
        value: selectedOptionId,
        onValueChange: setSelectedOptionId,
        className: "space-y-3",
        children: shippingOptions.map((option) => {
          var _a2, _b;
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedOptionId === option.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedOptionId(option.id),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  RadioGroupItem,
                  {
                    value: option.id,
                    id: option.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { paddingRight: 40 }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between items-start mb-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "font-medium text-foreground font-manrope", children: option.name }),
                      ((_a2 = option.data) == null ? void 0 : _a2.description) && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-muted-foreground mt-1", children: String(option.data.description) })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "font-semibold text-foreground", children: option.calculated_price && option.calculated_price.calculated_amount ? formatPrice(
                      option.calculated_price.calculated_amount,
                      option.calculated_price.currency_code || "CAD"
                    ) : "Free" }) })
                  ] }),
                  ((_b = option.data) == null ? void 0 : _b.estimated_delivery) && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
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
    cart && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-gray-50 rounded-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "font-medium mb-2 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "Subtotal:" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        selectedOptionId && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "Shipping:" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: (() => {
            const selectedOption = shippingOptions.find(
              (opt) => opt.id === selectedOptionId
            );
            return (selectedOption == null ? void 0 : selectedOption.calculated_price) && selectedOption.calculated_price.calculated_amount ? formatPrice(
              selectedOption.calculated_price.calculated_amount,
              selectedOption.calculated_price.currency_code || "CAD"
            ) : "Free";
          })() })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "border-t pt-1 flex justify-between font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "Total:" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-red-600", children: error }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: saving,
          children: "Back to Address"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_react8 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Payment = ({ onBack, onComplete }) => {
  var _a2;
  const { cart, unsetCart } = useCart();
  const [paymentProviders, setPaymentProviders] = (0, import_react8.useState)([]);
  const [selectedProviderId, setSelectedProviderId] = (0, import_react8.useState)("");
  const [loading, setLoading] = (0, import_react8.useState)(true);
  const [processing, setProcessing] = (0, import_react8.useState)(false);
  const [error, setError] = (0, import_react8.useState)(null);
  const [paymentStatus, setPaymentStatus] = (0, import_react8.useState)(null);
  (0, import_react8.useEffect)(() => {
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
  const handleCompleteOrder = async () => {
    var _a3, _b, _c, _d, _e, _f, _g, _h, _i;
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
      const paymentSession = (_a3 = paymentCollection.payment_sessions) == null ? void 0 : _a3.find(
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-gray-600", children: "Loading payment options..." })
    ] }) });
  }
  if (error && paymentProviders.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Payment Options" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  if (paymentProviders.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Payment Methods Available" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-yellow-600", children: "No payment methods are currently available. Please contact support." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-xl font-semibold font-manrope", children: "Payment Method" }),
    cart && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bg-gray-50 rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "font-medium mb-4 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "space-y-2 mb-4", children: (_a2 = cart.items) == null ? void 0 : _a2.map((item) => {
        var _a3, _b, _c;
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
            (_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.title,
            " ",
            ((_c = item.variant) == null ? void 0 : _c.title) && `(${item.variant.title})`,
            " \xD7 ",
            item.quantity
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: formatPrice(item.total || 0, cart.currency_code) })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-1 text-sm border-t pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Subtotal:" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Shipping:" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: cart.shipping_total !== void 0 ? formatPrice(cart.shipping_total, cart.currency_code) : "Free" })
        ] }),
        cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Tax:" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "border-t pt-2 flex justify-between font-medium text-base", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Total:" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Label, { children: "Select Payment Method" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        RadioGroup,
        {
          value: selectedProviderId,
          onValueChange: setSelectedProviderId,
          className: "space-y-3",
          children: paymentProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedProviderId === provider.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedProviderId(provider.id),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                  RadioGroupItem,
                  {
                    value: provider.id,
                    id: provider.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "pr-10", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h3", { className: "font-medium text-foreground font-manrope", children: [
                    provider.id === "stripe" && "Credit/Debit Card",
                    provider.id === "paypal" && "PayPal",
                    provider.id === "manual" && "Manual Payment",
                    !["stripe", "paypal", "manual"].includes(provider.id) && provider.id.charAt(0).toUpperCase() + provider.id.slice(1)
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-sm text-muted-foreground mt-1", children: [
                    provider.id === "stripe" && "Pay securely with your credit or debit card via Stripe",
                    provider.id === "paypal" && "Pay with your PayPal account",
                    provider.id === "manual" && "Manual payment processing (for testing)",
                    !["stripe", "paypal", "manual"].includes(provider.id) && `Secure payment with ${provider.id}`
                  ] }),
                  provider.id === "stripe" && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold", children: "Visa" }),
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold", children: "MC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold", children: "AE" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "text-xs text-muted-foreground", children: "and more" })
                  ] })
                ] })
              ]
            },
            provider.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("svg", { className: "h-5 w-5 text-blue-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm text-blue-700", children: "Your payment information is processed securely. We do not store your payment details." }) })
    ] }) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-red-600", children: error }) }),
    paymentStatus && !error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center", children: [
      processing && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-blue-700", children: paymentStatus })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: processing,
          children: "Back to Shipping"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_ui3 = require("@medusajs/ui");
var import_jsx_runtime16 = require("react/jsx-runtime");
var ExpressCheckout = ({
  productHandle,
  onOrderComplete
}) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = (0, import_react9.useState)(false);
  const currentStep = searchParams.get("step");
  console.log("ExpressCheckout - currentStep from URL:", currentStep);
  const isCartValid = (0, import_react9.useMemo)(() => {
    return (cart == null ? void 0 : cart.items) && cart.items.length > 0 && cart.items.some((item) => {
      var _a2, _b;
      return ((_b = (_a2 = item.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.handle) === productHandle;
    });
  }, [cart, productHandle]);
  const activeStep = currentStep === "product" || currentStep === "address" || currentStep === "shipping" || currentStep === "payment" ? currentStep : "product";
  console.log("ExpressCheckout - activeStep:", activeStep);
  const navigateToStep = (step) => {
    console.log("ExpressCheckout navigateToStep called with:", step);
    if (isLoading) {
      console.log("Navigation blocked - already loading");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      console.log("Executing navigation to step:", step);
      if (step === "product") {
        navigateToProduct(productHandle);
      } else {
        navigateToProduct(productHandle, step);
      }
      setIsLoading(false);
    }, 100);
  };
  (0, import_react9.useEffect)(() => {
    var _a2;
    if (!cart || isLoading) {
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
      if (!((_a2 = cart == null ? void 0 : cart.shipping_methods) == null ? void 0 : _a2.length)) {
        navigateToStep("shipping");
        return;
      }
    }
  }, [
    isCartValid,
    activeStep,
    cart == null ? void 0 : cart.shipping_address,
    cart == null ? void 0 : cart.billing_address,
    cart == null ? void 0 : cart.shipping_methods,
    productHandle,
    isLoading
  ]);
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
        return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          ProductSelection,
          {
            productHandle,
            onContinue: () => navigateToStep("address")
          }
        );
      case "address":
        return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          AddressForm,
          {
            onContinue: () => navigateToStep("shipping"),
            onBack: () => navigateToStep("product")
          }
        );
      case "shipping":
        return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          ShippingOptions,
          {
            onContinue: () => navigateToStep("payment"),
            onBack: () => navigateToStep("address")
          }
        );
      case "payment":
        return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "div",
      {
        className: "flex items-center justify-between",
        style: { marginBottom: 24 },
        children: steps.map((step, index) => {
          const isActive = step === activeStep;
          const isCompleted = steps.indexOf(activeStep) > index;
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
            "div",
            {
              className: (0, import_ui3.clx)(
                "flex",
                index == steps.length - 1 ? "flex-0" : "flex-1",
                "items-center justify-between"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "div",
                  {
                    className: `
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${isActive ? "bg-gray-100 text-black font-bold" : isCompleted ? "bg-gray-100 text-gray-500" : "bg-white border border-gray-500 text-gray-500"}
                `,
                    children: isCompleted ? "\u2713" : index + 1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "span",
                  {
                    className: `p-2 text-sm ${isActive ? "font-medium border-gray-800" : "font-light"}`,
                    children: stepNames[step]
                  }
                ),
                index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex-1 h-px bg-gray-300 mx-4" })
              ]
            },
            step
          );
        })
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "max-w-2xl mx-auto p-6", children: [
    renderStepIndicator(),
    renderStepContent()
  ] });
};

// src/components/Marketplace/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var Marketplace = ({
  initialView = "catalog",
  initialProductHandle,
  onOrderComplete,
  catalogOptions = {},
  headerContent
}) => {
  const [currentView, setCurrentView] = (0, import_react10.useState)(
    "catalog"
  );
  const [currentProductHandle, setCurrentProductHandle] = (0, import_react10.useState)("");
  const { cart } = useCart();
  (0, import_react10.useEffect)(() => {
    const urlView = getMarketplaceView();
    const urlProductHandle = getProductHandle();
    const view = urlView !== "catalog" ? urlView : initialView;
    const productHandle = urlProductHandle || initialProductHandle || "";
    setCurrentView(view);
    setCurrentProductHandle(productHandle);
  }, [initialView, initialProductHandle]);
  (0, import_react10.useEffect)(() => {
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
  const handleCheckout = () => {
    var _a2, _b;
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      const productHandle = (_b = (_a2 = firstProduct.variant) == null ? void 0 : _a2.product) == null ? void 0 : _b.handle;
      if (productHandle) {
        navigateToProduct(productHandle, "address");
      }
    }
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
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          ProductCatalog,
          {
            onProductSelect: handleProductSelect,
            onCheckoutClick: handleCheckout,
            searchPlaceholder: catalogOptions.searchPlaceholder,
            showSearch: catalogOptions.showSearch,
            showCategories: catalogOptions.showCategories,
            productsPerPage: catalogOptions.productsPerPage
          }
        );
      case "product":
        if (!currentProductHandle) {
          return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              "svg",
              {
                className: "mx-auto h-12 w-12",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "Product Not Found" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-muted-foreground mb-4", children: "The requested product could not be found." }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Button, { onClick: handleBackToCatalog, children: "Browse Products" })
          ] });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "flex items-center gap-2 pb-4 border-b", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: handleBackToCatalog,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                  "svg",
                  {
                    className: "h-4 w-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 19l-7-7 7-7"
                      }
                    )
                  }
                ),
                "Back to Catalog"
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "space-y-6", children: renderContent() });
};

// src/providers/fonts.tsx
var import_react11 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var FontContext = (0, import_react11.createContext)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FontContext.Provider, { value, children });
};
var useFont = () => {
  const context = (0, import_react11.useContext)(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};

// src/providers/storefront.tsx
var import_react12 = require("react");

// src/components/ui/typography.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var BrandText = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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

// src/providers/storefront.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var StorefrontContext = (0, import_react12.createContext)(null);
var StorefrontProvider = ({
  children,
  backendUrl,
  publishableKey,
  baseRoute
}) => {
  const [isReady, setIsReady] = (0, import_react12.useState)(false);
  const [capturedBaseRoute, setCapturedBaseRoute] = (0, import_react12.useState)("");
  (0, import_react12.useEffect)(() => {
    if (typeof window !== "undefined") {
      const currentBaseRoute = baseRoute || window.location.pathname;
      setCapturedBaseRoute(currentBaseRoute);
      setBaseRoute(currentBaseRoute);
    }
    updateSDKConfig({
      backendUrl,
      publishableKey
    });
    setIsReady(true);
  }, [backendUrl, publishableKey, baseRoute]);
  if (!isReady) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(H2, { className: "text-xl font-semibold text-muted-foreground mb-2", children: "Initializing Marketplace..." }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    StorefrontContext.Provider,
    {
      value: {
        isReady,
        backendUrl,
        publishableKey,
        baseRoute: capturedBaseRoute
      },
      children
    }
  );
};
var useStorefront = () => {
  const context = (0, import_react12.useContext)(StorefrontContext);
  if (!context) {
    throw new Error("useStorefront must be used within a StorefrontProvider");
  }
  return context;
};

// src/components/OAGExpressMarketplace/index.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var OAGExpressMarketplace = ({
  backendUrl,
  publishableKey,
  productHandle,
  className,
  onOrderComplete,
  initialView = "catalog",
  catalogOptions,
  title = "OpticAg Marketplace",
  fontBrand,
  fontUi,
  baseRoute
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    StorefrontProvider,
    {
      backendUrl,
      publishableKey,
      baseRoute,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FontProvider, { fontBrand, fontUi, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Layout, { className, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        Marketplace,
        {
          initialView,
          initialProductHandle: productHandle,
          onOrderComplete,
          catalogOptions
        }
      ) }) })
    }
  );
};
var OAGExpressMarketplace_default = OAGExpressMarketplace;

// src/components/Router/index.tsx
var import_react13 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Router = ({ handle }) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentStep = searchParams.get("step");
  const isCartValid = (0, import_react13.useMemo)(() => {
    var _a2, _b;
    return ((_b = (_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2[0]) == null ? void 0 : _b.product_handle) === handle;
  }, [cart, handle]);
  const activeTab = currentStep === "product" || currentStep === "address" || currentStep === "shipping" || currentStep === "payment" ? currentStep : "product";
  (0, import_react13.useEffect)(() => {
    var _a2;
    if (!cart) {
      return;
    }
    if (activeTab !== "product" && !isCartValid) {
      return router.push(`/${handle}`);
    }
    if (activeTab === "shipping" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address))) {
      return router.push(buildUrl(`/${handle}`, { step: "address" }));
    }
    if (activeTab === "payment" && (!(cart == null ? void 0 : cart.shipping_address) || !(cart == null ? void 0 : cart.billing_address) || !((_a2 = cart == null ? void 0 : cart.shipping_methods) == null ? void 0 : _a2.length))) {
      return router.push(buildUrl(`/${handle}`, { step: "shipping" }));
    }
  }, [isCartValid, activeTab, cart, handle, router]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, {});
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  OAGExpressMarketplace,
  P,
  Payment,
  ProductCatalog,
  ProductSelection,
  RegionProvider,
  Router,
  SecondCol,
  ShippingOptions,
  StorefrontProvider,
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
  useSearchParams,
  useStorefront
});
