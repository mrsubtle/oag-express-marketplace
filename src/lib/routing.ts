import { useCallback, useEffect, useState } from "react";

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
  
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  // Assuming the product handle is the last segment of the path
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

// Navigate to product view
export const navigateToProduct = (productHandle: string, step?: string) => {
  if (typeof window === "undefined") return;
  
  const url = step 
    ? buildUrl(`/${productHandle}`, { step })
    : `/${productHandle}?view=product`;
    
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
};

// Navigate to catalog view
export const navigateToCatalog = () => {
  if (typeof window === "undefined") return;
  
  // Clear product-specific parameters but preserve other query params
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.delete("step");
  currentParams.delete("view");
  
  const baseUrl = window.location.pathname.split("/")[1] 
    ? `/${window.location.pathname.split("/")[1]}`  // Preserve base path
    : "/";
    
  const url = currentParams.toString() 
    ? `${baseUrl}?${currentParams.toString()}`
    : baseUrl;
    
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent("routechange", { detail: { url } }));
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