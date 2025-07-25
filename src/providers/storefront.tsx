"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { updateSDKConfig } from "@/lib/sdk";
import { setBaseRoute } from "@/lib/routing";
import { H2 } from "@/components/ui/typography";

type StorefrontContextType = {
  isReady: boolean;
  backendUrl: string;
  publishableKey: string;
  baseRoute: string;
};

const StorefrontContext = createContext<StorefrontContextType | null>(null);

type StorefrontProviderProps = {
  children: React.ReactNode;
  backendUrl: string;
  publishableKey: string;
  baseRoute?: string;
};

export const StorefrontProvider = ({
  children,
  backendUrl,
  publishableKey,
  baseRoute,
}: StorefrontProviderProps) => {
  const [isReady, setIsReady] = useState(false);
  const [capturedBaseRoute, setCapturedBaseRoute] = useState<string>("");

  useEffect(() => {
    // Capture the base route from the current URL if not explicitly provided
    if (typeof window !== "undefined") {
      const currentBaseRoute = baseRoute || window.location.pathname;
      setCapturedBaseRoute(currentBaseRoute);
      
      // Set the base route in the routing system
      setBaseRoute(currentBaseRoute);
    }
    
    // Configure SDK immediately when the provider mounts
    updateSDKConfig({
      backendUrl,
      publishableKey,
    });
    
    // Mark as ready after configuration
    setIsReady(true);
  }, [backendUrl, publishableKey, baseRoute]);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <H2 className="text-xl font-semibold text-muted-foreground mb-2">
            Initializing Marketplace...
          </H2>
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <StorefrontContext.Provider
      value={{
        isReady,
        backendUrl,
        publishableKey,
        baseRoute: capturedBaseRoute,
      }}
    >
      {children}
    </StorefrontContext.Provider>
  );
};

export const useStorefront = () => {
  const context = useContext(StorefrontContext);

  if (!context) {
    throw new Error("useStorefront must be used within a StorefrontProvider");
  }

  return context;
};