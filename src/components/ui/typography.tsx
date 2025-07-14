"use client";

import React from "react";
import { useFont } from "@/providers/fonts";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const BrandText = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  const { fontBrand } = useFont();
  
  return (
    <span 
      className={className} 
      style={{ 
        fontFamily: fontBrand,
        ...style 
      }} 
      {...props}
    >
      {children}
    </span>
  );
};

export const UIText = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  const { fontUi } = useFont();
  
  return (
    <span 
      className={className} 
      style={{ 
        fontFamily: fontUi,
        ...style 
      }} 
      {...props}
    >
      {children}
    </span>
  );
};

// Header components that use brand font
export const H1 = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { fontBrand } = useFont();
  
  return (
    <h1 
      className={className} 
      style={{ 
        fontFamily: fontBrand,
        ...style 
      }} 
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { fontBrand } = useFont();
  
  return (
    <h2 
      className={className} 
      style={{ 
        fontFamily: fontBrand,
        ...style 
      }} 
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { fontBrand } = useFont();
  
  return (
    <h3 
      className={className} 
      style={{ 
        fontFamily: fontBrand,
        ...style 
      }} 
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { fontBrand } = useFont();
  
  return (
    <h4 
      className={className} 
      style={{ 
        fontFamily: fontBrand,
        ...style 
      }} 
      {...props}
    >
      {children}
    </h4>
  );
};

export const H5 = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { fontBrand } = useFont();
  
  return (
    <h5 
      className={className} 
      style={{ 
        fontFamily: fontBrand,
        ...style 
      }} 
      {...props}
    >
      {children}
    </h5>
  );
};

export const H6 = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  const { fontBrand } = useFont();
  
  return (
    <h6 
      className={className} 
      style={{ 
        fontFamily: fontBrand,
        ...style 
      }} 
      {...props}
    >
      {children}
    </h6>
  );
};

// Paragraph that uses UI font
export const P = ({ children, className, style, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) => {
  const { fontUi } = useFont();
  
  return (
    <p 
      className={className} 
      style={{ 
        fontFamily: fontUi,
        ...style 
      }} 
      {...props}
    >
      {children}
    </p>
  );
};