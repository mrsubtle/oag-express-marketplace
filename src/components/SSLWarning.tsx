"use client";

import { useEffect, useState } from "react";
import { detectSSLIssues } from "@/lib/sdk";
import { useStorefront } from "@/providers/storefront";

interface SSLWarningProps {
  onDismiss?: () => void;
}

export const SSLWarning = ({ onDismiss }: SSLWarningProps) => {
  const { backendUrl } = useStorefront();
  const [sslIssue, setSSLIssue] = useState<{ hasIssue: boolean; error?: string } | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkSSL = async () => {
      const result = await detectSSLIssues(backendUrl);
      setSSLIssue(result);
    };

    checkSSL();
  }, [backendUrl]);

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (!sslIssue?.hasIssue || dismissed) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-yellow-800">
            SSL Certificate Warning
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              {sslIssue.error || "SSL certificate validation failed."}
            </p>
            <p className="mt-2">
              <strong>For mobile Safari users:</strong> This error is common when using:
            </p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>IP addresses instead of domain names</li>
              <li>Self-signed certificates</li>
              <li>Development servers</li>
            </ul>
            <p className="mt-2">
              <strong>Solutions:</strong>
            </p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>Use a proper domain name with valid SSL certificate</li>
              <li>For development: Use HTTP instead of HTTPS</li>
              <li>Install a valid SSL certificate (Let's Encrypt is free)</li>
            </ul>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <button
            type="button"
            className="bg-yellow-50 rounded-md text-yellow-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick={handleDismiss}
          >
            <span className="sr-only">Dismiss</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};