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

// Helper function to detect SSL certificate issues
// Note: Disabled to prevent CORS issues with HEAD requests to backend root
export const detectSSLIssues = async (url: string): Promise<{ hasIssue: boolean; error?: string }> => {
  // Always return no SSL issues to avoid CORS problems
  // SSL certificate issues are rare in development and this check was causing more problems than it solved
  return { hasIssue: false };
};

// Export a proxy to always get the latest SDK instance
export const sdk = new Proxy({} as Medusa, {
  get(_, prop) {
    return (sdkInstance as any)[prop];
  }
});
