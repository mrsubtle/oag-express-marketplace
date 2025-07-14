import Medusa from "@medusajs/js-sdk";

// SDK configuration state
let currentConfig: { backendUrl: string; publishableKey?: string } = {
  backendUrl: "http://localhost:9000",
  publishableKey: undefined,
};

// Create SDK instance
let sdkInstance = new Medusa({
  baseUrl: currentConfig.backendUrl,
  debug: typeof process !== "undefined" && process.env?.NODE_ENV === "development",
  publishableKey: currentConfig.publishableKey,
});

// Function to update SDK configuration at runtime
export const updateSDKConfig = (config: { backendUrl?: string; publishableKey?: string }) => {
  if (config.backendUrl) {
    currentConfig.backendUrl = config.backendUrl;
  }
  if (config.publishableKey) {
    currentConfig.publishableKey = config.publishableKey;
  }
  
  // Create new SDK instance with updated config
  sdkInstance = new Medusa({
    baseUrl: currentConfig.backendUrl,
    debug: typeof process !== "undefined" && process.env?.NODE_ENV === "development",
    publishableKey: currentConfig.publishableKey,
  });
};

// Export a proxy to always get the latest SDK instance
export const sdk = new Proxy({} as Medusa, {
  get(_, prop) {
    return (sdkInstance as any)[prop];
  }
});
