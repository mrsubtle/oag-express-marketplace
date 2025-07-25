"use client";
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
  SSLWarning: () => SSLWarning,
  SecondCol: () => SecondCol,
  ShippingOptions: () => ShippingOptions,
  StorefrontProvider: () => StorefrontProvider,
  StripePayment: () => StripePayment,
  UIText: () => UIText,
  buildUrl: () => buildUrl,
  detectSSLIssues: () => detectSSLIssues,
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

// src/components/Layout/index.tsx
var import_react4 = require("react");
var import_ui = require("@medusajs/ui");

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
var detectSSLIssues = async (url) => {
  return { hasIssue: false };
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
  const removeItem = async (itemId) => {
    var _a2, _b;
    const { parent: dataCart } = await sdk.store.cart.deleteLineItem(
      cart.id,
      itemId,
      {
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      }
    );
    if (!dataCart) {
      throw new Error("Failed to remove item from cart");
    }
    console.log("Cart after deletion:", dataCart);
    console.log("Items after deletion:", (_a2 = dataCart.items) == null ? void 0 : _a2.map((item) => {
      var _a3, _b2, _c, _d, _e;
      return {
        id: item.id,
        title: (_b2 = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b2.title,
        variantTitle: (_c = item.variant) == null ? void 0 : _c.title,
        thumbnail: (_e = (_d = item.variant) == null ? void 0 : _d.product) == null ? void 0 : _e.thumbnail
      };
    }));
    try {
      const { cart: refreshedCart } = await sdk.store.cart.retrieve(dataCart.id, {
        fields: "+items.*,+items.variant.*,+items.variant.options.*,+items.variant.options.option.*,+items.variant.product.*"
      });
      console.log("Refreshed cart:", refreshedCart);
      console.log("Refreshed items:", (_b = refreshedCart.items) == null ? void 0 : _b.map((item) => {
        var _a3, _b2, _c, _d, _e;
        return {
          id: item.id,
          title: (_b2 = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b2.title,
          variantTitle: (_c = item.variant) == null ? void 0 : _c.title,
          thumbnail: (_e = (_d = item.variant) == null ? void 0 : _d.product) == null ? void 0 : _e.thumbnail
        };
      }));
      setCart(refreshedCart);
      return refreshedCart;
    } catch (refreshError) {
      console.warn("Failed to refresh cart after deletion, using original response:", refreshError);
      setCart(dataCart);
      return dataCart;
    }
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
        removeItem,
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

// src/lib/price-utils.ts
var formatPrice = (amount, currencyCode = "CAD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode
  }).format(amount);
};

// src/components/Layout/index.tsx
var import_lucide_react2 = require("lucide-react");

// src/components/ui/badge.tsx
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/badge.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/components/ui/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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

// src/components/ui/sheet.tsx
var React2 = __toESM(require("react"));
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_class_variance_authority3 = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority3.cva)(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React2.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SheetPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SheetOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// src/components/Layout/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function LayoutContent({ children, className }) {
  var _a2, _b;
  const { cart, removeItem } = useCart();
  const { region, regions, setRegion } = useRegion();
  const [isSheetOpen, setIsSheetOpen] = (0, import_react4.useState)(false);
  const handleCheckout = () => {
    var _a3, _b2;
    setIsSheetOpen(false);
    if (cart && cart.items && cart.items.length > 0) {
      const firstProduct = cart.items[0];
      const productHandle = (_b2 = (_a3 = firstProduct.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b2.handle;
      if (productHandle) {
        navigateToProduct(productHandle, "address");
      }
    }
  };
  const handleRemoveItem = async (itemId) => {
    try {
      await removeItem(itemId);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  const cartItemsCount = ((_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2.length) || 0;
  const cartTotal = (cart == null ? void 0 : cart.total) || 0;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-1 flex-col gap-2 pb-4", children: [
    cartItemsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SheetTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Button, { variant: "outline", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.ShoppingCart, { className: "h-4 w-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Badge, { variant: "secondary", className: "ml-1", children: cartItemsCount }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "ml-1", children: formatPrice(cartTotal, (cart == null ? void 0 : cart.currency_code) || "CAD") })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(SheetContent, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SheetTitle, { children: "Cart Summary" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-6 space-y-3", children: (_b = cart == null ? void 0 : cart.items) == null ? void 0 : _b.map((item) => {
          var _a3, _b2, _c, _d, _e;
          return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-start gap-3 group", children: [
            ((_b2 = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b2.thumbnail) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "img",
              {
                src: item.variant.product.thumbnail,
                alt: item.variant.product.title || "Product",
                className: "w-16 h-16 object-cover rounded-md bg-gray-100",
                style: {
                  width: 4 * 16,
                  height: 4 * 16,
                  backgroundSize: "cover"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: "text-sm font-medium truncate font-manrope", children: (_d = (_c = item.variant) == null ? void 0 : _c.product) == null ? void 0 : _d.title }),
                  ((_e = item.variant) == null ? void 0 : _e.title) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-xs text-gray-500", children: item.variant.title })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => handleRemoveItem(item.id),
                    className: "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                    style: {
                      color: "red"
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.Trash2, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between items-center mt-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "text-xs text-gray-500", children: [
                  "Qty: ",
                  item.quantity
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-sm font-medium", children: formatPrice(
                  item.subtotal || item.total || (item.unit_price || 0) * item.quantity,
                  cart.currency_code
                ) })
              ] })
            ] })
          ] }, item.id);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-6 border-t pt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Subtotal:" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: (cart == null ? void 0 : cart.subtotal) !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
          ] }),
          (cart == null ? void 0 : cart.shipping_total) !== void 0 && cart.shipping_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Shipping:" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: formatPrice(cart.shipping_total, cart.currency_code) })
          ] }),
          (cart == null ? void 0 : cart.tax_total) !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Tax:" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "border-t pt-2 flex justify-between font-medium", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Total:" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: (cart == null ? void 0 : cart.total) !== void 0 && formatPrice(cart.total, cart.currency_code) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Button,
            {
              onClick: handleCheckout,
              className: "w-full mt-4",
              size: "sm",
              children: "Checkout"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-6 border-t pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: "font-medium mb-3 font-manrope", children: "Settings" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-sm text-gray-600", children: "Region:" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
              "select",
              {
                value: (region == null ? void 0 : region.id) || "",
                onChange: (e) => {
                  const selectedRegion = regions.find(
                    (r) => r.id === e.target.value
                  );
                  setRegion(selectedRegion);
                },
                className: "w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "", children: "Select Region" }),
                  regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: r.id, children: r.name }, r.id))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-6 text-center space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-xs text-gray-500", children: "Powered by" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex flex-1 flex-col gap-2", children })
  ] });
}
function Layout({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: (0, import_ui.clx)("font-inter bg-ui-bg-subtle", className), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: (0, import_ui.clx)("flex justify-center items-start"), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RegionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LayoutContent, { className, children }) }) }) }) });
}

// src/components/Marketplace/index.tsx
var import_react15 = require("react");

// src/components/ProductCatalog/index.tsx
var import_react5 = require("react");

// src/components/ui/input.tsx
var React3 = __toESM(require("react"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  const [products, setProducts] = (0, import_react5.useState)([]);
  const [categories, setCategories] = (0, import_react5.useState)([]);
  const [loading, setLoading] = (0, import_react5.useState)(true);
  const [searchQuery, setSearchQuery] = (0, import_react5.useState)("");
  const [committedSearchQuery, setCommittedSearchQuery] = (0, import_react5.useState)("");
  const [selectedCategory, setSelectedCategory] = (0, import_react5.useState)(null);
  const [currentPage, setCurrentPage] = (0, import_react5.useState)(1);
  const [hasMore, setHasMore] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
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
  (0, import_react5.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-gray-600", children: "Loading products..." })
    ] }) });
  }
  if (error && products.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Products" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-red-600", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-4", children: [
      showSearch && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Button,
          {
            type: "button",
            variant: "default",
            onClick: handleSearch,
            "aria-label": "Search",
            size: "icon",
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.Search, { className: "w-5 h-5" })
          }
        )
      ] }),
      showCategories && categories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-sm font-medium text-muted-foreground font-manrope", children: "Categories" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Button,
            {
              variant: selectedCategory === null ? "default" : "secondary",
              size: "sm",
              onClick: () => handleCategorySelect(null),
              children: "All Products"
            }
          ),
          categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
    (committedSearchQuery || selectedCategory) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-sm text-gray-600", children: [
      committedSearchQuery && `Results for "${committedSearchQuery}"`,
      committedSearchQuery && selectedCategory && " in ",
      selectedCategory && ((_a2 = categories.find((c) => c.id === selectedCategory)) == null ? void 0 : _a2.name),
      products.length > 0 && ` (${products.length} products)`
    ] }),
    products.length === 0 && !loading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "svg",
        {
          className: "mx-auto h-12 w-12",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "No products found" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-muted-foreground", children: committedSearchQuery || selectedCategory ? "Try adjusting your search or filters" : "No products are available at the moment" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        className: "flex flex-col flex-1 bg-white border border-[#fafafa] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
        onClick: () => onProductSelect(product.handle),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "aspect-square bg-gray-100", children: product.thumbnail ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "img",
            {
              src: product.thumbnail,
              alt: product.title,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "w-full h-full flex items-center justify-center text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "svg",
            {
              className: "h-16 w-16",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-1 flex-col p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "flex-1 font-medium text-foreground mb-2 line-clamp-2 font-manrope", children: product.title }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col flex-1 gap-6 items-start justify-start", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-lg font-semibold", children: formatProductPrice(product.variants) }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { size: "sm", className: "w-full shadow-lg", children: "View Details" })
            ] })
          ] })
        ]
      },
      product.id
    )) }),
    hasMore && !loading && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { onClick: loadMore, variant: "secondary", children: "Load More Products" }) }),
    loading && products.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-center py-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" }) })
  ] });
};

// src/components/ExpressCheckout/index.tsx
var import_react13 = require("react");

// src/components/ProductSelection/index.tsx
var import_react6 = require("react");

// src/components/ui/label.tsx
var React4 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime9 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority4.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/select.tsx
var React5 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react4.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react4.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react4.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React5.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectScrollUpButton, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react4.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ProductSelection/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var ProductSelection = ({
  productHandle,
  onContinue
}) => {
  var _a2;
  const [product, setProduct] = (0, import_react6.useState)(null);
  const [selectedVariant, setSelectedVariant] = (0, import_react6.useState)(null);
  const [quantity, setQuantity] = (0, import_react6.useState)(1);
  const [loading, setLoading] = (0, import_react6.useState)(true);
  const [addingToCart, setAddingToCart] = (0, import_react6.useState)(false);
  const [error, setError] = (0, import_react6.useState)(null);
  const { addToCart, cart } = useCart();
  const { region } = useRegion();
  (0, import_react6.useEffect)(() => {
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
            fields: "+variants.*,+variants.options.*,+variants.options.option.*,+variants.calculated_price.*",
            region_id: region == null ? void 0 : region.id
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-gray-600", children: "Loading product details..." })
    ] }) });
  }
  if (error && !product) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Product" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-red-600", children: error })
    ] });
  }
  if (!product) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-yellow-800 font-medium mb-2", children: "Product Not Found" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-yellow-600", children: "The requested product could not be found." })
    ] });
  }
  const currentProductInCart = (_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2.find(
    (item) => {
      var _a3, _b;
      return ((_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.handle) === productHandle;
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "text-2xl font-bold text-foreground font-manrope", children: product.title }),
        product.description && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-muted-foreground mt-2", children: product.description })
      ] }),
      product.thumbnail && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "img",
        {
          src: product.thumbnail,
          alt: product.title,
          className: "w-full h-full object-cover"
        }
      ) }),
      product.variants && product.variants.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Label, { htmlFor: "variant-select", children: "Select Variant" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          Select,
          {
            value: (selectedVariant == null ? void 0 : selectedVariant.id) || product.variants[0].id,
            onValueChange: (value) => {
              var _a3;
              const variant = (_a3 = product.variants) == null ? void 0 : _a3.find((v) => v.id === value);
              setSelectedVariant(variant || null);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectValue, { placeholder: "Choose a variant" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectContent, { children: product.variants.map((variant) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectItem, { value: variant.id, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-row justify-between items-center gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: variant.title }),
                variant.calculated_price && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ml-2 font-medium", children: formatPrice(
                  variant.calculated_price.calculated_amount || 0,
                  variant.calculated_price.currency_code || "CAD"
                ) })
              ] }) }, variant.id)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Label, { htmlFor: "quantity", children: "Quantity" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
        (selectedVariant == null ? void 0 : selectedVariant.inventory_quantity) !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "text-sm text-gray-500", children: [
          selectedVariant.inventory_quantity,
          " available"
        ] })
      ] }),
      (selectedVariant == null ? void 0 : selectedVariant.calculated_price) && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "p-4 bg-gray-50 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-lg font-medium", children: "Price:" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-xl font-bold", children: formatPrice(
          (selectedVariant.calculated_price.calculated_amount || 0) * quantity,
          selectedVariant.calculated_price.currency_code || "CAD"
        ) })
      ] }) })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "p-4 bg-gray-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-red-600", children: error }) }),
    currentProductInCart && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "p-4 bg-gray-50 border rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { children: [
      "This product is already in your cart (",
      currentProductInCart.quantity,
      " items)"
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        Button,
        {
          onClick: handleAddToCart,
          disabled: !selectedVariant || addingToCart || quantity < 1,
          className: "flex-1",
          size: "lg",
          children: addingToCart ? "Adding to Cart..." : currentProductInCart ? "Update Cart" : `Add to Cart`
        }
      ),
      currentProductInCart && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_react7 = require("react");

// src/components/ui/checkbox.tsx
var React6 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Checkbox = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react5.Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/AddressForm/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var AddressForm = ({ onContinue, onBack }) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const { updateCart, cart } = useCart();
  const { region } = useRegion();
  const [shippingAddress, setShippingAddress] = (0, import_react7.useState)({
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
  const [billingAddress, setBillingAddress] = (0, import_react7.useState)({
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
  const [sameAsShipping, setSameAsShipping] = (0, import_react7.useState)(
    (cart == null ? void 0 : cart.billing_address) ? false : true
  );
  const [loading, setLoading] = (0, import_react7.useState)(false);
  const [errors, setErrors] = (0, import_react7.useState)({});
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-xl font-semibold font-manrope", children: "Shipping Address" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_first_name", children: "First Name *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Input,
            {
              id: "shipping_first_name",
              value: shippingAddress.first_name,
              onChange: (e) => updateShippingAddress("first_name", e.target.value),
              className: errors.shipping_first_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_first_name && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_first_name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_last_name", children: "Last Name *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Input,
            {
              id: "shipping_last_name",
              value: shippingAddress.last_name,
              onChange: (e) => updateShippingAddress("last_name", e.target.value),
              className: errors.shipping_last_name ? "border-red-300" : ""
            }
          ),
          errors.shipping_last_name && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_last_name })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_company", children: "Company" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Input,
          {
            id: "shipping_company",
            value: shippingAddress.company,
            onChange: (e) => updateShippingAddress("company", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_address_1", children: "Address *" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Input,
          {
            id: "shipping_address_1",
            value: shippingAddress.address_1,
            onChange: (e) => updateShippingAddress("address_1", e.target.value),
            className: errors.shipping_address_1 ? "border-red-300" : ""
          }
        ),
        errors.shipping_address_1 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_address_1 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_address_2", children: "Address Line 2" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Input,
          {
            id: "shipping_address_2",
            value: shippingAddress.address_2,
            onChange: (e) => updateShippingAddress("address_2", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_city", children: "City *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Input,
            {
              id: "shipping_city",
              value: shippingAddress.city,
              onChange: (e) => updateShippingAddress("city", e.target.value),
              className: errors.shipping_city ? "border-red-300" : ""
            }
          ),
          errors.shipping_city && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_city })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_postal_code", children: "Postal Code *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Input,
            {
              id: "shipping_postal_code",
              value: shippingAddress.postal_code,
              onChange: (e) => updateShippingAddress("postal_code", e.target.value),
              className: errors.shipping_postal_code ? "border-red-300" : ""
            }
          ),
          errors.shipping_postal_code && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_postal_code })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_province", children: "State/Province" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Input,
            {
              id: "shipping_province",
              value: shippingAddress.province,
              onChange: (e) => updateShippingAddress("province", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_country", children: "Country *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            "select",
            {
              id: "shipping_country",
              value: shippingAddress.country_code,
              onChange: (e) => updateShippingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.shipping_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.shipping_country_code && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.shipping_country_code })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "shipping_phone", children: "Phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Checkbox,
          {
            id: "same_as_shipping",
            checked: sameAsShipping,
            onCheckedChange: (checked) => setSameAsShipping(!!checked)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "same_as_shipping", children: "Billing address is the same as shipping address" })
      ] }),
      !sameAsShipping && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "text-lg font-medium font-manrope", children: "Billing Address" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "billing_first_name", children: "First Name *" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              Input,
              {
                id: "billing_first_name",
                value: billingAddress.first_name,
                onChange: (e) => updateBillingAddress("first_name", e.target.value),
                className: errors.billing_first_name ? "border-red-300" : ""
              }
            ),
            errors.billing_first_name && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_first_name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "billing_last_name", children: "Last Name *" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              Input,
              {
                id: "billing_last_name",
                value: billingAddress.last_name,
                onChange: (e) => updateBillingAddress("last_name", e.target.value),
                className: errors.billing_last_name ? "border-red-300" : ""
              }
            ),
            errors.billing_last_name && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_last_name })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "billing_address_1", children: "Address *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Input,
            {
              id: "billing_address_1",
              value: billingAddress.address_1,
              onChange: (e) => updateBillingAddress("address_1", e.target.value),
              className: errors.billing_address_1 ? "border-red-300" : ""
            }
          ),
          errors.billing_address_1 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_address_1 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "billing_city", children: "City *" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              Input,
              {
                id: "billing_city",
                value: billingAddress.city,
                onChange: (e) => updateBillingAddress("city", e.target.value),
                className: errors.billing_city ? "border-red-300" : ""
              }
            ),
            errors.billing_city && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_city })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "billing_postal_code", children: "Postal Code *" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              Input,
              {
                id: "billing_postal_code",
                value: billingAddress.postal_code,
                onChange: (e) => updateBillingAddress("postal_code", e.target.value),
                className: errors.billing_postal_code ? "border-red-300" : ""
              }
            ),
            errors.billing_postal_code && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_postal_code })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: "billing_country", children: "Country *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            "select",
            {
              id: "billing_country",
              value: billingAddress.country_code,
              onChange: (e) => updateBillingAddress("country_code", e.target.value),
              className: `w-full p-2 border rounded-md ${errors.billing_country_code ? "border-red-300" : "border-gray-300"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "", children: "Select Country" }),
                countries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: country.iso_2, children: country.display_name }, country.iso_2))
              ]
            }
          ),
          errors.billing_country_code && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.billing_country_code })
        ] })
      ] })
    ] }),
    errors.general && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-red-600", children: errors.general }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
var import_react8 = require("react");

// src/components/ui/radio-group.tsx
var React7 = __toESM(require("react"));
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var RadioGroup = React7.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React7.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react6.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ShippingOptions/index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var ShippingOptions = ({
  onContinue,
  onBack
}) => {
  const { cart, updateCart } = useCart();
  const [shippingOptions, setShippingOptions] = (0, import_react8.useState)([]);
  const [selectedOptionId, setSelectedOptionId] = (0, import_react8.useState)("");
  const [loading, setLoading] = (0, import_react8.useState)(true);
  const [saving, setSaving] = (0, import_react8.useState)(false);
  const [error, setError] = (0, import_react8.useState)(null);
  (0, import_react8.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-gray-600", children: "Loading shipping options..." })
    ] }) });
  }
  if (error && shippingOptions.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Shipping Options" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  if (shippingOptions.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-xl font-semibold", children: "Shipping Options" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Shipping Options Available" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-yellow-600", children: "No shipping options are available for your address. Please check your address or contact support." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Address" }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-xl font-semibold font-manrope", children: "Choose Shipping Method" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      RadioGroup,
      {
        value: selectedOptionId,
        onValueChange: setSelectedOptionId,
        className: "space-y-3",
        children: shippingOptions.map((option) => {
          var _a2, _b;
          return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedOptionId === option.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedOptionId(option.id),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                  RadioGroupItem,
                  {
                    value: option.id,
                    id: option.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { paddingRight: 40 }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between items-start mb-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "font-medium text-foreground font-manrope", children: option.name }),
                      ((_a2 = option.data) == null ? void 0 : _a2.description) && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm text-muted-foreground mt-1", children: String(option.data.description) })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "font-semibold text-foreground", children: option.calculated_price && option.calculated_price.calculated_amount ? formatPrice(
                      option.calculated_price.calculated_amount,
                      option.calculated_price.currency_code || "CAD"
                    ) : "Free" }) })
                  ] }),
                  ((_b = option.data) == null ? void 0 : _b.estimated_delivery) && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
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
    cart && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bg-gray-50 rounded-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "font-medium mb-2 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Subtotal:" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        selectedOptionId && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Shipping:" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: (() => {
            const selectedOption = shippingOptions.find(
              (opt) => opt.id === selectedOptionId
            );
            return (selectedOption == null ? void 0 : selectedOption.calculated_price) && selectedOption.calculated_price.calculated_amount ? formatPrice(
              selectedOption.calculated_price.calculated_amount,
              selectedOption.calculated_price.currency_code || "CAD"
            ) : "Free";
          })() })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "border-t pt-1 flex justify-between font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "Total:" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-red-600", children: error }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: saving,
          children: "Back to Address"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_react12 = require("react");

// src/providers/storefront.tsx
var import_react10 = require("react");

// src/providers/fonts.tsx
var import_react9 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var FontContext = (0, import_react9.createContext)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(FontContext.Provider, { value, children });
};
var useFont = () => {
  const context = (0, import_react9.useContext)(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};

// src/components/ui/typography.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var BrandText = ({ children, className, style, ...props }) => {
  const { fontBrand } = useFont();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_jsx_runtime18 = require("react/jsx-runtime");
var StorefrontContext = (0, import_react10.createContext)(null);
var StorefrontProvider = ({
  children,
  backendUrl,
  publishableKey,
  baseRoute
}) => {
  const [isReady, setIsReady] = (0, import_react10.useState)(false);
  const [capturedBaseRoute, setCapturedBaseRoute] = (0, import_react10.useState)("");
  (0, import_react10.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(H2, { className: "text-xl font-semibold text-muted-foreground mb-2", children: "Initializing Marketplace..." }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
  const context = (0, import_react10.useContext)(StorefrontContext);
  if (!context) {
    throw new Error("useStorefront must be used within a StorefrontProvider");
  }
  return context;
};

// src/components/StripePayment/index.tsx
var import_react11 = require("react");
var import_stripe_js = require("@stripe/stripe-js");
var import_react_stripe_js = require("@stripe/react-stripe-js");
var import_jsx_runtime19 = require("react/jsx-runtime");
var getStripePublishableKey = (providedKey) => {
  if (providedKey) {
    return providedKey;
  }
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_STRIPE_PK || process.env.REACT_APP_STRIPE_PK || "";
  }
  return "";
};
var StripePaymentForm = ({
  paymentSession,
  onComplete,
  onError,
  stripePublishableKey
}) => {
  const stripe = (0, import_react_stripe_js.useStripe)();
  const elements = (0, import_react_stripe_js.useElements)();
  const { cart, unsetCart } = useCart();
  const [processing, setProcessing] = (0, import_react11.useState)(false);
  const [paymentStatus, setPaymentStatus] = (0, import_react11.useState)(null);
  const handlePayment = async () => {
    var _a2, _b, _c;
    if (!stripe || !elements || !cart) {
      onError("Stripe not loaded or cart not found");
      return;
    }
    const cardElement = elements.getElement(import_react_stripe_js.CardElement);
    if (!cardElement) {
      onError("Card element not found");
      return;
    }
    try {
      setProcessing(true);
      setPaymentStatus("Processing payment...");
      console.log("Payment Session:", paymentSession);
      console.log("Payment Session Data:", paymentSession.data);
      console.log("Client Secret:", (_a2 = paymentSession.data) == null ? void 0 : _a2.client_secret);
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(paymentSession.data.client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: ((_b = cart.billing_address) == null ? void 0 : _b.first_name) && ((_c = cart.billing_address) == null ? void 0 : _c.last_name) ? `${cart.billing_address.first_name} ${cart.billing_address.last_name}` : "Customer",
            email: cart.email || void 0,
            address: cart.billing_address ? {
              line1: cart.billing_address.address_1 || void 0,
              line2: cart.billing_address.address_2 || void 0,
              city: cart.billing_address.city || void 0,
              state: cart.billing_address.province || void 0,
              postal_code: cart.billing_address.postal_code || void 0,
              country: cart.billing_address.country_code || void 0
            } : void 0
          }
        }
      });
      if (stripeError) {
        throw new Error(stripeError.message || "Payment failed");
      }
      console.log("Payment Intent:", paymentIntent);
      console.log("Payment Intent Status:", paymentIntent == null ? void 0 : paymentIntent.status);
      console.log("Payment Intent ID:", paymentIntent == null ? void 0 : paymentIntent.id);
      if ((paymentIntent == null ? void 0 : paymentIntent.status) !== "succeeded" && (paymentIntent == null ? void 0 : paymentIntent.status) !== "requires_capture") {
        throw new Error(`Payment was not successful. Status: ${paymentIntent == null ? void 0 : paymentIntent.status}`);
      }
      setPaymentStatus("Creating order...");
      const completeResponse = await sdk.store.cart.complete(cart.id);
      if (completeResponse.type !== "order") {
        const errorMessage = completeResponse.type === "cart" && completeResponse.error ? completeResponse.error.message : "Failed to create order from cart";
        throw new Error(errorMessage);
      }
      if (!completeResponse.order) {
        throw new Error("Order not found in completion response");
      }
      unsetCart();
      onComplete(completeResponse.order);
    } catch (err) {
      console.error("Stripe payment error:", err);
      onError(err.message || "Payment failed. Please try again.");
    } finally {
      setProcessing(false);
      setPaymentStatus(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-sm text-gray-600", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "Enter your card details below. Use your postal code or ZIP code for the postal field." }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "p-4 border border-gray-300 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        import_react_stripe_js.CardElement,
        {
          options: {
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4"
                },
                fontFamily: "ui-sans-serif, system-ui, sans-serif"
              },
              invalid: {
                color: "#9e2146"
              }
            },
            hidePostalCode: false
          }
        }
      ) })
    ] }),
    paymentStatus && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center", children: [
      processing && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-blue-700", children: paymentStatus })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Button,
      {
        onClick: handlePayment,
        disabled: !stripe || processing,
        className: "w-full",
        children: processing ? "Processing Payment..." : `Pay ${(cart == null ? void 0 : cart.total) !== void 0 ? new Intl.NumberFormat("en-CA", {
          style: "currency",
          currency: cart.currency_code || "CAD"
        }).format(cart.total) : "..."}`
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "svg",
        {
          className: "h-5 w-5 text-gray-400",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "path",
            {
              fillRule: "evenodd",
              d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-sm text-gray-600", children: "Your payment is secured by Stripe. Your card details are never stored on our servers." }) })
    ] }) })
  ] });
};
var StripePayment = ({
  paymentSession,
  onComplete,
  onError,
  stripePublishableKey
}) => {
  const [stripePromise, setStripePromise] = (0, import_react11.useState)(null);
  const [stripeKey, setStripeKey] = (0, import_react11.useState)("");
  (0, import_react11.useEffect)(() => {
    const key = getStripePublishableKey(stripePublishableKey);
    if (!key) {
      onError(
        "Stripe publishable key not found. Please provide stripePublishableKey prop or set NEXT_PUBLIC_STRIPE_PK environment variable."
      );
      return;
    }
    setStripeKey(key);
    setStripePromise((0, import_stripe_js.loadStripe)(key));
  }, [onError, stripePublishableKey]);
  if (!stripePromise || !stripeKey) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-gray-600", children: "Loading Stripe..." })
    ] }) });
  }
  const elementOptions = {
    mode: "payment",
    amount: paymentSession.amount,
    currency: paymentSession.currency_code || "cad",
    // Add locale to support international postal codes (including Canadian format)
    locale: "en",
    appearance: {
      theme: "stripe",
      variables: {
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSizeBase: "16px",
        colorPrimary: "#0070f3"
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_stripe_js.Elements, { stripe: stripePromise, options: elementOptions, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    StripePaymentForm,
    {
      paymentSession,
      onComplete,
      onError
    }
  ) });
};

// src/components/Payment/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var getPaymentProviderDisplayName = (provider, index) => {
  const id = provider.id.toLowerCase();
  if (id === "pp_stripe_stripe") return "Credit/Debit Card";
  if (id === "pp_system_default") return "Manual Payment";
  if (id.includes("stripe")) return "Credit/Debit Card";
  if (id.includes("paypal")) return "PayPal";
  if (id.includes("apple")) return "Apple Pay";
  if (id.includes("google")) return "Google Pay";
  if (id.includes("manual") || id.includes("system")) return "Manual Payment";
  return id.replace(/^pp_/, "").replace(/_/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};
var getPaymentProviderDescription = (provider, index) => {
  const id = provider.id.toLowerCase();
  if (id === "pp_stripe_stripe")
    return "Pay securely with your credit or debit card via Stripe";
  if (id === "pp_system_default")
    return "Manual payment processing (for testing)";
  if (id.includes("stripe"))
    return "Pay securely with your credit or debit card via Stripe";
  if (id.includes("paypal")) return "Pay with your PayPal account";
  if (id.includes("apple")) return "Pay with Touch ID or Face ID";
  if (id.includes("google")) return "Pay with Google Pay";
  if (id.includes("manual") || id.includes("system"))
    return "Manual payment processing (for testing)";
  return "Secure payment processing";
};
var Payment = ({ onBack, onComplete, stripePublishableKey }) => {
  var _a2;
  const { cart, unsetCart } = useCart();
  const { region } = useRegion();
  const { backendUrl, publishableKey } = useStorefront();
  const [paymentProviders, setPaymentProviders] = (0, import_react12.useState)([]);
  const [selectedProviderId, setSelectedProviderId] = (0, import_react12.useState)("");
  const [loading, setLoading] = (0, import_react12.useState)(true);
  const [processing, setProcessing] = (0, import_react12.useState)(false);
  const [error, setError] = (0, import_react12.useState)(null);
  const [paymentStatus, setPaymentStatus] = (0, import_react12.useState)(null);
  const [paymentCollection, setPaymentCollection] = (0, import_react12.useState)(null);
  const [activePaymentSession, setActivePaymentSession] = (0, import_react12.useState)(null);
  const [showStripeForm, setShowStripeForm] = (0, import_react12.useState)(false);
  (0, import_react12.useEffect)(() => {
    const fetchPaymentProviders = async () => {
      if (!(cart == null ? void 0 : cart.id)) {
        setError("No cart found");
        setLoading(false);
        return;
      }
      if (!(region == null ? void 0 : region.id)) {
        setError("No region selected");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const { payment_providers } = await sdk.store.payment.listPaymentProviders({
          region_id: region.id
        });
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
  }, [cart == null ? void 0 : cart.id, region == null ? void 0 : region.id]);
  const handleCompleteOrder = async () => {
    var _a3;
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
      console.log(
        "Initializing payment session for provider:",
        selectedProviderId
      );
      const paymentCollectionResponse = await sdk.store.payment.initiatePaymentSession(cart, {
        provider_id: selectedProviderId
      });
      if (!paymentCollectionResponse.payment_collection) {
        throw new Error("Failed to initialize payment session");
      }
      const paymentCollection2 = paymentCollectionResponse.payment_collection;
      console.log("Payment collection created:", paymentCollection2.id);
      setPaymentCollection(paymentCollection2);
      const paymentSession = (_a3 = paymentCollection2.payment_sessions) == null ? void 0 : _a3.find(
        (session) => session.provider_id === selectedProviderId
      );
      if (!paymentSession) {
        throw new Error(
          `Payment session not found for provider: ${selectedProviderId}`
        );
      }
      console.log("Payment session found:", paymentSession.id);
      setActivePaymentSession(paymentSession);
      if (selectedProviderId.includes("stripe")) {
        console.log("Using Stripe payment session:", paymentSession.id);
        setShowStripeForm(true);
        setProcessing(false);
        return;
      } else if (selectedProviderId === "pp_system_default") {
        console.log("Using system default payment:", paymentSession.id);
      }
      await completeCartOrder();
    } catch (err) {
      console.error("Error initializing payment:", err);
      handlePaymentError(err);
    } finally {
      if (!selectedProviderId.includes("stripe")) {
        setProcessing(false);
      }
    }
  };
  const completeCartOrder = async () => {
    if (!(cart == null ? void 0 : cart.id)) {
      throw new Error("No cart found");
    }
    setPaymentStatus("Creating order...");
    console.log("Completing cart:", cart.id);
    const completeResponse = await sdk.store.cart.complete(cart.id);
    if (completeResponse.type !== "order") {
      const errorMessage = completeResponse.type === "cart" && completeResponse.error ? completeResponse.error.message : "Failed to create order from cart";
      if (errorMessage.toLowerCase().includes("payment") || errorMessage.toLowerCase().includes("authoriz")) {
        throw new Error(
          `Payment authorization required: ${errorMessage}. For production environments, you may need to implement additional payment authorization steps.`
        );
      }
      throw new Error(errorMessage);
    }
    if (!completeResponse.order) {
      throw new Error("Order not found in completion response");
    }
    const order = completeResponse.order;
    setPaymentStatus("Order completed successfully!");
    unsetCart();
    if (onComplete) {
      onComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
    }
  };
  const handlePaymentError = (err) => {
    var _a3, _b, _c, _d, _e, _f, _g, _h, _i;
    setProcessing(false);
    if (((_a3 = err.response) == null ? void 0 : _a3.status) === 400) {
      setError(
        "Invalid payment information. Please check your details and try again."
      );
    } else if (((_b = err.response) == null ? void 0 : _b.status) === 402) {
      setError(
        "Payment declined. Please check your payment method and try again."
      );
    } else if (((_c = err.response) == null ? void 0 : _c.status) === 404) {
      setError("Cart not found. Please refresh the page and try again.");
    } else if (((_d = err.response) == null ? void 0 : _d.status) === 409) {
      setError("Cart has been modified. Please refresh and try again.");
    } else if (((_e = err.message) == null ? void 0 : _e.toLowerCase().includes("payment")) || ((_f = err.message) == null ? void 0 : _f.toLowerCase().includes("authoriz"))) {
      setError(
        "Payment authorization failed. For production environments, you may need to implement additional payment authorization steps. Please check your payment provider configuration."
      );
    } else if ((_g = err.message) == null ? void 0 : _g.toLowerCase().includes("inventory")) {
      setError(
        "Some items in your cart are no longer available. Please refresh and try again."
      );
    } else if ((_h = err.message) == null ? void 0 : _h.toLowerCase().includes("session")) {
      setError("Payment session expired. Please try again.");
    } else if ((_i = err.message) == null ? void 0 : _i.toLowerCase().includes("network")) {
      setError("Network error. Please check your connection and try again.");
    } else {
      setError(
        err.message || "Failed to complete order. Please try again or contact support."
      );
    }
  };
  const handleStripeComplete = (order) => {
    setShowStripeForm(false);
    setPaymentStatus("Order completed successfully!");
    if (onComplete) {
      onComplete(order);
    } else {
      alert(`Order completed successfully! Order ID: ${order.id}`);
    }
  };
  const handleStripeError = (errorMessage) => {
    setShowStripeForm(false);
    setError(errorMessage);
  };
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-gray-600", children: "Loading payment options..." })
    ] }) });
  }
  if (error && paymentProviders.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "p-6 bg-red-50 border border-red-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "text-red-800 font-medium mb-2", children: "Error Loading Payment Options" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-red-600", children: error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  if (paymentProviders.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { className: "text-xl font-semibold", children: "Payment" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "p-6 bg-yellow-50 border border-yellow-200 rounded-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "text-yellow-800 font-medium mb-2", children: "No Payment Methods Available" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-yellow-600", children: "No payment methods are currently available. Please contact support." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, { onClick: onBack, variant: "secondary", className: "flex-1", children: "Back to Shipping" }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { className: "text-xl font-semibold font-manrope", children: "Payment Method" }),
    cart && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "bg-gray-50 rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "font-medium mb-4 font-manrope", children: "Order Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "space-y-2 mb-4", children: (_a2 = cart.items) == null ? void 0 : _a2.map((item) => {
        var _a3, _b, _c;
        return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { children: [
            (_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.title,
            " ",
            ((_c = item.variant) == null ? void 0 : _c.title) && `(${item.variant.title})`,
            " \xD7",
            " ",
            item.quantity
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: formatPrice(item.total || 0, cart.currency_code) })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "space-y-1 text-sm border-t pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Subtotal:" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Shipping:" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: cart.shipping_total !== void 0 ? formatPrice(cart.shipping_total, cart.currency_code) : "Free" })
        ] }),
        cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Tax:" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "border-t pt-2 flex justify-between font-medium text-base", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Total:" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Label, { children: "Select Payment Method" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        RadioGroup,
        {
          value: selectedProviderId,
          onValueChange: setSelectedProviderId,
          className: "space-y-3",
          children: paymentProviders.map((provider, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            "div",
            {
              className: `relative border rounded-lg p-4 cursor-pointer transition-colors ${selectedProviderId === provider.id ? "border-primary bg-accent" : "border-border hover:border-muted-foreground"}`,
              onClick: () => setSelectedProviderId(provider.id),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  RadioGroupItem,
                  {
                    value: provider.id,
                    id: provider.id,
                    className: "absolute top-4 right-4"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "pr-10", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "font-medium text-foreground font-manrope", children: getPaymentProviderDisplayName(provider, index) }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-sm text-muted-foreground mt-1", children: getPaymentProviderDescription(provider, index) }),
                  (provider.id.includes("stripe") || provider.id.includes("paypal") || provider.id.startsWith("pp_")) && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-8 h-5 bg-gray-300 rounded text-white text-xs flex items-center justify-center font-bold", children: "Visa" }),
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-8 h-5 bg-gray-300 rounded text-white text-xs flex items-center justify-center font-bold", children: "MC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-8 h-5 bg-gray-300 rounded text-white text-xs flex items-center justify-center font-bold", children: "AE" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-xs text-muted-foreground", children: "and more" })
                  ] })
                ] })
              ]
            },
            provider.id
          ))
        }
      )
    ] }),
    showStripeForm && activePaymentSession && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "border-t pt-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "text-lg font-medium mb-4", children: "Enter Payment Details" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        StripePayment,
        {
          paymentSession: activePaymentSession,
          onComplete: handleStripeComplete,
          onError: handleStripeError,
          stripePublishableKey
        }
      )
    ] }) }),
    !showStripeForm && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "svg",
        {
          className: "h-5 w-5 text-blue-400",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "path",
            {
              fillRule: "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-sm text-blue-700", children: "Your payment information is processed securely. We do not store your payment details." }) })
    ] }) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-red-600", children: error }) }),
    paymentStatus && !error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center", children: [
      processing && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-blue-700", children: paymentStatus })
    ] }) }),
    !showStripeForm && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Button,
        {
          onClick: onBack,
          variant: "secondary",
          className: "flex-1",
          disabled: processing,
          children: "Back to Shipping"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        Button,
        {
          onClick: handleCompleteOrder,
          className: "flex-1",
          disabled: !selectedProviderId || processing,
          children: processing ? "Processing..." : selectedProviderId.includes("stripe") ? "Continue to Payment" : `Complete Order (${(cart == null ? void 0 : cart.total) !== void 0 ? formatPrice(cart.total, cart.currency_code) : "..."})`
        }
      )
    ] }),
    showStripeForm && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      Button,
      {
        onClick: () => {
          setShowStripeForm(false);
          setActivePaymentSession(null);
          setPaymentCollection(null);
          setError(null);
        },
        variant: "secondary",
        className: "flex-1",
        children: "Back to Payment Methods"
      }
    ) })
  ] });
};

// src/components/ExpressCheckout/index.tsx
var import_ui2 = require("@medusajs/ui");
var import_jsx_runtime21 = require("react/jsx-runtime");
var ExpressCheckout = ({
  productHandle,
  onOrderComplete,
  stripePublishableKey
}) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = (0, import_react13.useState)(false);
  const currentStep = searchParams.get("step");
  console.log("ExpressCheckout - currentStep from URL:", currentStep);
  const isCartValid = (0, import_react13.useMemo)(() => {
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
  (0, import_react13.useEffect)(() => {
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
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          ProductSelection,
          {
            productHandle,
            onContinue: () => navigateToStep("address")
          }
        );
      case "address":
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          AddressForm,
          {
            onContinue: () => navigateToStep("shipping"),
            onBack: () => navigateToStep("product")
          }
        );
      case "shipping":
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          ShippingOptions,
          {
            onContinue: () => navigateToStep("payment"),
            onBack: () => navigateToStep("address")
          }
        );
      case "payment":
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Payment,
          {
            onBack: () => navigateToStep("shipping"),
            onComplete: handleOrderComplete,
            stripePublishableKey
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "div",
      {
        className: "flex items-center justify-between",
        style: { marginBottom: 24 },
        children: steps.map((step, index) => {
          const isActive = step === activeStep;
          const isCompleted = steps.indexOf(activeStep) > index;
          return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
            "div",
            {
              className: (0, import_ui2.clx)(
                "flex",
                index == steps.length - 1 ? "flex-0" : "flex-1",
                "items-center justify-between"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "div",
                  {
                    className: `
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${isActive ? "bg-gray-100 text-black font-bold" : isCompleted ? "bg-gray-100 text-gray-500" : "bg-white border border-gray-500 text-gray-500"}
                `,
                    children: isCompleted ? "\u2713" : index + 1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "span",
                  {
                    className: `p-2 text-sm ${isActive ? "font-bold border-gray-800" : "font-light"}`,
                    children: stepNames[step]
                  }
                ),
                index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex-1 h-px bg-gray-300 mx-4" })
              ]
            },
            step
          );
        })
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "max-w-2xl mx-auto p-6", children: [
    renderStepIndicator(),
    renderStepContent()
  ] });
};

// src/components/SSLWarning.tsx
var import_react14 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var SSLWarning = ({ onDismiss }) => {
  const { backendUrl } = useStorefront();
  const [sslIssue, setSSLIssue] = (0, import_react14.useState)(null);
  const [dismissed, setDismissed] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    const checkSSL = async () => {
      const result = await detectSSLIssues(backendUrl);
      setSSLIssue(result);
    };
    checkSSL();
  }, [backendUrl]);
  const handleDismiss = () => {
    setDismissed(true);
    onDismiss == null ? void 0 : onDismiss();
  };
  if (!(sslIssue == null ? void 0 : sslIssue.hasIssue) || dismissed) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { className: "h-5 w-5 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "ml-3 flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h3", { className: "text-sm font-medium text-yellow-800", children: "SSL Certificate Warning" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mt-2 text-sm text-yellow-700", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: sslIssue.error || "SSL certificate validation failed." }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "For mobile Safari users:" }),
          " This error is common when using:"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("ul", { className: "mt-1 list-disc list-inside space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: "IP addresses instead of domain names" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: "Self-signed certificates" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: "Development servers" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: "Solutions:" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("ul", { className: "mt-1 list-disc list-inside space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: "Use a proper domain name with valid SSL certificate" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: "For development: Use HTTP instead of HTTPS" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: "Install a valid SSL certificate (Let's Encrypt is free)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "ml-4 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "button",
      {
        type: "button",
        className: "bg-yellow-50 rounded-md text-yellow-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
        onClick: handleDismiss,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    ) })
  ] }) });
};

// src/components/Marketplace/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var Marketplace = ({
  initialView = "catalog",
  initialProductHandle,
  onOrderComplete,
  catalogOptions = {},
  headerContent,
  stripePublishableKey
}) => {
  const [currentView, setCurrentView] = (0, import_react15.useState)(
    "catalog"
  );
  const [currentProductHandle, setCurrentProductHandle] = (0, import_react15.useState)("");
  const { cart } = useCart();
  (0, import_react15.useEffect)(() => {
    const urlView = getMarketplaceView();
    const urlProductHandle = getProductHandle();
    const view = urlView !== "catalog" ? urlView : initialView;
    const productHandle = urlProductHandle || initialProductHandle || "";
    setCurrentView(view);
    setCurrentProductHandle(productHandle);
  }, [initialView, initialProductHandle]);
  (0, import_react15.useEffect)(() => {
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
        return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "text-gray-500 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "svg",
              {
                className: "mx-auto h-12 w-12",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { className: "text-lg font-medium text-foreground mb-2 font-manrope", children: "Product Not Found" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-muted-foreground mb-4", children: "The requested product could not be found." }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Button, { onClick: handleBackToCatalog, children: "Browse Products" })
          ] });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center gap-2 pb-4 border-b", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: handleBackToCatalog,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                  "svg",
                  {
                    className: "h-4 w-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            ExpressCheckout,
            {
              productHandle: currentProductHandle,
              onOrderComplete: handleOrderComplete,
              stripePublishableKey
            }
          )
        ] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(SSLWarning, {}),
    renderContent()
  ] });
};

// src/components/OAGExpressMarketplace/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
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
  baseRoute,
  stripePublishableKey
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    StorefrontProvider,
    {
      backendUrl,
      publishableKey,
      baseRoute,
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(FontProvider, { fontBrand, fontUi, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Layout, { className, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        Marketplace,
        {
          initialView,
          initialProductHandle: productHandle,
          onOrderComplete,
          catalogOptions,
          stripePublishableKey
        }
      ) }) })
    }
  );
};
var OAGExpressMarketplace_default = OAGExpressMarketplace;

// src/components/Router/index.tsx
var import_react16 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Router = ({ handle }) => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentStep = searchParams.get("step");
  const isCartValid = (0, import_react16.useMemo)(() => {
    var _a2, _b;
    return ((_b = (_a2 = cart == null ? void 0 : cart.items) == null ? void 0 : _a2[0]) == null ? void 0 : _b.product_handle) === handle;
  }, [cart, handle]);
  const activeTab = currentStep === "product" || currentStep === "address" || currentStep === "shipping" || currentStep === "payment" ? currentStep : "product";
  (0, import_react16.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, {});
};

// src/components/SecondCol/index.tsx
var import_ui3 = require("@medusajs/ui");
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime26 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: (0, import_ui3.clx)("flex flex-0 flex-col gap-6", "w-xs"), children: [
    cart && cart.items && cart.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "bg-white rounded-lg border p-4 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h3", { className: "font-medium text-lg font-manrope", children: "Cart Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "space-y-3", children: cart.items.map((item) => {
        var _a3, _b, _c, _d, _e;
        return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-start gap-3", children: [
          ((_b = (_a3 = item.variant) == null ? void 0 : _a3.product) == null ? void 0 : _b.thumbnail) && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "img",
            {
              src: item.variant.product.thumbnail,
              alt: item.variant.product.title || "Product",
              className: "w-16 h-16 object-cover rounded-md bg-gray-100"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h4", { className: "text-sm font-medium truncate font-manrope", children: (_d = (_c = item.variant) == null ? void 0 : _c.product) == null ? void 0 : _d.title }),
            ((_e = item.variant) == null ? void 0 : _e.title) && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-xs text-gray-500", children: item.variant.title }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex justify-between items-center mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", { className: "text-xs text-gray-500", children: [
                "Qty: ",
                item.quantity
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-sm font-medium", children: formatPrice(
                item.subtotal || item.total || (item.unit_price || 0) * item.quantity,
                cart.currency_code
              ) })
            ] })
          ] })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "border-t pt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "Subtotal:" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: cart.subtotal !== void 0 && formatPrice(cart.subtotal, cart.currency_code) })
        ] }),
        cart.shipping_total !== void 0 && cart.shipping_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "Shipping:" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: formatPrice(cart.shipping_total, cart.currency_code) })
        ] }),
        cart.tax_total !== void 0 && cart.tax_total > 0 && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "Tax:" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: formatPrice(cart.tax_total, cart.currency_code) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "border-t pt-2 flex justify-between font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "Total:" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: cart.total !== void 0 && formatPrice(cart.total, cart.currency_code) })
        ] }),
        onCheckoutClick && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          Button,
          {
            onClick: onCheckoutClick,
            className: "w-full mt-4 flex items-center justify-center gap-2",
            size: "sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react7.ShoppingCart, { className: "w-4 h-4" }),
              "Checkout"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "bg-white rounded-lg border p-4 space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h3", { className: "font-medium font-manrope", children: "Settings" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-sm text-ui-fg-muted", children: "Region:" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("option", { value: "", children: "Select Region" }),
              regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("option", { value: r.id, children: r.name }, r.id))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "text-center space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-xs text-ui-fg-subtle", children: "Powered by" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
  SSLWarning,
  SecondCol,
  ShippingOptions,
  StorefrontProvider,
  StripePayment,
  UIText,
  buildUrl,
  detectSSLIssues,
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
