"use client";

import React, { createContext, useContext } from "react";

interface FontContextType {
  fontBrand: string;
  fontUi: string;
}

const FontContext = createContext<FontContextType>({
  fontBrand: "system-ui, -apple-system, sans-serif",
  fontUi: "system-ui, -apple-system, sans-serif"
});

interface FontProviderProps {
  children: React.ReactNode;
  fontBrand?: string;
  fontUi?: string;
}

export const FontProvider = ({ 
  children, 
  fontBrand = "system-ui, -apple-system, sans-serif",
  fontUi = "system-ui, -apple-system, sans-serif"
}: FontProviderProps) => {
  const value = {
    fontBrand: fontBrand || fontUi || "system-ui, -apple-system, sans-serif",
    fontUi: fontUi || "system-ui, -apple-system, sans-serif"
  };

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};