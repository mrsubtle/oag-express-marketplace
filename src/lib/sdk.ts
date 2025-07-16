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
export const detectSSLIssues = async (url: string): Promise<{ hasIssue: boolean; error?: string }> => {
  try {
    // Use the storefront regions endpoint instead of /health
    const response = await fetch(`${url}/store/regions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { hasIssue: false };
  } catch (error: any) {
    if (error.message?.includes('certificate') || 
        error.message?.includes('SSL') ||
        error.message?.includes('TLS') ||
        error.message?.includes('Load failed')) {
      return { 
        hasIssue: true, 
        error: 'SSL certificate validation failed. This is common with self-signed certificates or IP-based URLs.' 
      };
    }
    return { hasIssue: false };
  }
};

// Export a proxy to always get the latest SDK instance
export const sdk = new Proxy({} as Medusa, {
  get(_, prop) {
    return (sdkInstance as any)[prop];
  }
});
