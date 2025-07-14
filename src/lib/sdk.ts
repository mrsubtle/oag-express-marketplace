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

// Function to update SDK configuration at runtime
export const updateSDKConfig = (config: { backendUrl?: string; publishableKey?: string }) => {
  if (config.backendUrl) {
    MEDUSA_BACKEND_URL = config.backendUrl;
  }
  if (config.publishableKey) {
    MEDUSA_PUBLISHABLE_KEY = config.publishableKey;
  }
  
  // Reinitialize SDK with new config
  Object.assign(sdk, new Medusa({
    baseUrl: MEDUSA_BACKEND_URL,
    debug: getEnvVar("NODE_ENV") === "development",
    publishableKey: MEDUSA_PUBLISHABLE_KEY,
  }));
};

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: getEnvVar("NODE_ENV") === "development",
  publishableKey: MEDUSA_PUBLISHABLE_KEY,
});
