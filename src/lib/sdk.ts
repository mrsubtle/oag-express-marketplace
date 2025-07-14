import Medusa from "@medusajs/js-sdk";

// Helper function to get environment variables from multiple sources
const getEnvVar = (key: string, defaultValue?: string): string | undefined => {
  // Check process.env first (for NextJS/build-time)
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key];
  }
  
  // Check window globals (for runtime configuration)
  if (typeof window !== "undefined") {
    const windowVar = (window as any)[`__${key}__`];
    if (windowVar) {
      return windowVar;
    }
  }
  
  return defaultValue;
};

export let MEDUSA_BACKEND_URL = getEnvVar("NEXT_PUBLIC_MEDUSA_BACKEND_URL", "http://localhost:9000")!;
export let MEDUSA_PUBLISHABLE_KEY = getEnvVar("NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY");

// Create SDK instance
let sdkInstance = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: getEnvVar("NODE_ENV") === "development",
  publishableKey: MEDUSA_PUBLISHABLE_KEY,
});

// Function to update SDK configuration at runtime
export const updateSDKConfig = (config: { backendUrl?: string; publishableKey?: string }) => {
  if (config.backendUrl) {
    MEDUSA_BACKEND_URL = config.backendUrl;
  }
  if (config.publishableKey) {
    MEDUSA_PUBLISHABLE_KEY = config.publishableKey;
  }
  
  // Create new SDK instance with updated config
  sdkInstance = new Medusa({
    baseUrl: MEDUSA_BACKEND_URL,
    debug: getEnvVar("NODE_ENV") === "development",
    publishableKey: MEDUSA_PUBLISHABLE_KEY,
  });
};

// Export a proxy to always get the latest SDK instance
export const sdk = new Proxy({} as Medusa, {
  get(_, prop) {
    return (sdkInstance as any)[prop];
  }
});
