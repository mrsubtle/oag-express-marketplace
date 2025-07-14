import { useCallback, useEffect, useState } from "react";

// Global variable to store the base route
let _baseRoute = "";

// Function to set the base route (called by StorefrontProvider)
export const setBaseRoute = (baseRoute: string) => {
  _baseRoute = baseRoute;
};

// Function to get the base route
export const getBaseRoute = () => _baseRoute;

// Custom hook to manage URL search parameters without NextJS
export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  });

  const updateSearchParams = useCallback((newParams: URLSearchParams) => {
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.pushState({}, "", newUrl);
      setSearchParams(new URLSearchParams(newParams));
    }
  }, []);

  useEffect(() => {
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
    get: (key: string) => searchParams.get(key),
    set: (key: string, value: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      updateSearchParams(newParams);
    },
    delete: (key: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete(key);
      updateSearchParams(newParams);
    },
    toString: () => searchParams.toString(),
  };
};

// Custom router hook to replace NextJS useRouter
export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  });

  const push = useCallback((url: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", url);
      setCurrentPath(window.location.pathname);
      
      // Trigger a custom event to notify components of route change
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);

  const replace = useCallback((url: string) => {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", url);
      setCurrentPath(window.location.pathname);
      
      // Trigger a custom event to notify components of route change
      window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
    }
  }, []);

  useEffect(() => {
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
    },
  };
};

// Utility to extract product handle from current path
export const getProductHandle = (): string | null => {
  if (typeof window === "undefined") return null;
  
  const currentPath = window.location.pathname;
  const baseRoute = getBaseRoute();
  
  // Remove the base route to get the relative path
  const relativePath = baseRoute && currentPath.startsWith(baseRoute) 
    ? currentPath.substring(baseRoute.length)
    : currentPath;
  
  const pathSegments = relativePath.split("/").filter(Boolean);
  // Assuming the product handle is the last segment of the relative path
  return pathSegments[pathSegments.length - 1] || null;
};

// Utility to determine current marketplace view
export const getMarketplaceView = (): "catalog" | "product" => {
  const productHandle = getProductHandle();
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const hasStep = searchParams.has("step");
  
  // If we have a product handle and either a step parameter or explicitly in product mode
  if (productHandle && (hasStep || searchParams.get("view") === "product")) {
    return "product";
  }
  
  return "catalog";
};

// Global flag to prevent rapid navigation
let _navigationInProgress = false;

// Navigate to product view
export const navigateToProduct = (productHandle: string, step?: string) => {
  if (typeof window === "undefined") return;
  
  // Prevent rapid navigation calls
  if (_navigationInProgress) {
    return;
  }
  
  _navigationInProgress = true;
  
  const baseRoute = getBaseRoute();
  const basePath = baseRoute.endsWith("/") ? baseRoute.slice(0, -1) : baseRoute;
  
  const url = step 
    ? buildUrl(`${basePath}/${productHandle}`, { step })
    : `${basePath}/${productHandle}?view=product`;
  
  console.log("navigateToProduct - final URL:", url);
    
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
  console.log("navigateToProduct - dispatched routechange event");
  
  // Reset flag after a short delay
  setTimeout(() => {
    _navigationInProgress = false;
  }, 200);
};

// Navigate to catalog view
export const navigateToCatalog = () => {
  if (typeof window === "undefined") return;
  
  // Prevent rapid navigation calls
  if (_navigationInProgress) {
    return;
  }
  
  _navigationInProgress = true;
  
  // Clear product-specific parameters but preserve other query params
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.delete("step");
  currentParams.delete("view");
  
  const baseRoute = getBaseRoute();
  const baseUrl = baseRoute || "/";
    
  const url = currentParams.toString() 
    ? `${baseUrl}?${currentParams.toString()}`
    : baseUrl;
    
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
  
  // Reset flag after a short delay
  setTimeout(() => {
    _navigationInProgress = false;
  }, 200);
};

// Utility to build URLs with search parameters
export const buildUrl = (path: string, params?: Record<string, string>): string => {
  const url = new URL(path, typeof window !== "undefined" ? window.location.origin : "");
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  
  return url.pathname + url.search;
};