import * as react_jsx_runtime from 'react/jsx-runtime';
import { HttpTypes } from '@medusajs/types';
import React$1 from 'react';
import Medusa from '@medusajs/js-sdk';

interface OAGExpressMarketplaceProps {
    /**
     * The product handle/slug to display if starting in product view
     * If not provided, will start with catalog or extract from URL
     */
    productHandle?: string;
    /**
     * Optional className for custom styling
     */
    className?: string;
    /**
     * Base URL for the MedusaJS backend
     */
    backendUrl?: string;
    /**
     * MedusaJS publishable key
     */
    publishableKey?: string;
    /**
     * Callback when order is completed
     */
    onOrderComplete?: (order: HttpTypes.StoreOrder) => void;
    /**
     * Initial view mode - defaults to catalog for full marketplace experience
     */
    initialView?: "catalog" | "product";
    /**
     * Customization options for catalog
     */
    catalogOptions?: {
        searchPlaceholder?: string;
        showSearch?: boolean;
        showCategories?: boolean;
        productsPerPage?: number;
    };
    /**
     * Custom header content
     */
    headerContent?: React.ReactNode;
    /**
     * Marketplace title
     */
    title?: string;
    /**
     * Font family for brand elements (headers, titles). Falls back to fontUi if not specified.
     */
    fontBrand?: string;
    /**
     * Font family for UI elements. Used everywhere except headers/titles when fontBrand is specified.
     */
    fontUi?: string;
}
declare const OAGExpressMarketplace: ({ productHandle, className, backendUrl, publishableKey, onOrderComplete, initialView, catalogOptions, headerContent, title, fontBrand, fontUi, }: OAGExpressMarketplaceProps) => react_jsx_runtime.JSX.Element;

interface MarketplaceProps {
    /**
     * Initial view mode - can be overridden by URL
     */
    initialView?: "catalog" | "product";
    /**
     * Initial product handle if starting in product view
     */
    initialProductHandle?: string;
    /**
     * Callback when order is completed
     */
    onOrderComplete?: (order: HttpTypes.StoreOrder) => void;
    /**
     * Customization options for catalog
     */
    catalogOptions?: {
        searchPlaceholder?: string;
        showSearch?: boolean;
        showCategories?: boolean;
        productsPerPage?: number;
    };
    /**
     * Custom header content
     */
    headerContent?: React.ReactNode;
}
declare const Marketplace: ({ initialView, initialProductHandle, onOrderComplete, catalogOptions, headerContent, }: MarketplaceProps) => react_jsx_runtime.JSX.Element;

interface ProductCatalogProps {
    onProductSelect: (productHandle: string) => void;
    searchPlaceholder?: string;
    showSearch?: boolean;
    showCategories?: boolean;
    productsPerPage?: number;
}
declare const ProductCatalog: ({ onProductSelect, searchPlaceholder, showSearch, showCategories, productsPerPage, }: ProductCatalogProps) => react_jsx_runtime.JSX.Element;

interface ExpressCheckoutProps {
    productHandle: string;
    onOrderComplete?: (order: HttpTypes.StoreOrder) => void;
}
declare const ExpressCheckout: ({ productHandle, onOrderComplete }: ExpressCheckoutProps) => react_jsx_runtime.JSX.Element;

interface ProductSelectionProps {
    productHandle: string;
    onContinue: () => void;
}
declare const ProductSelection: ({ productHandle, onContinue, }: ProductSelectionProps) => react_jsx_runtime.JSX.Element;

interface AddressFormProps {
    onContinue: () => void;
    onBack: () => void;
}
declare const AddressForm: ({ onContinue, onBack }: AddressFormProps) => react_jsx_runtime.JSX.Element;

interface ShippingOptionsProps {
    onContinue: () => void;
    onBack: () => void;
}
declare const ShippingOptions: ({ onContinue, onBack, }: ShippingOptionsProps) => react_jsx_runtime.JSX.Element;

interface PaymentProps {
    onBack: () => void;
    onComplete?: (order: HttpTypes.StoreOrder) => void;
}
declare const Payment: ({ onBack, onComplete }: PaymentProps) => react_jsx_runtime.JSX.Element;

interface TypographyProps {
    children: React$1.ReactNode;
    className?: string;
    style?: React$1.CSSProperties;
}
declare const BrandText: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLElement>) => react_jsx_runtime.JSX.Element;
declare const UIText: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLElement>) => react_jsx_runtime.JSX.Element;
declare const H1: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
declare const H2: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
declare const H3: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
declare const H4: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
declare const H5: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
declare const H6: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLHeadingElement>) => react_jsx_runtime.JSX.Element;
declare const P: ({ children, className, style, ...props }: TypographyProps & React$1.HTMLAttributes<HTMLParagraphElement>) => react_jsx_runtime.JSX.Element;

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}
declare function Layout({ children, className }: LayoutProps): react_jsx_runtime.JSX.Element;

type RouterProps = {
    handle: string;
};
declare const Router: ({ handle }: RouterProps) => react_jsx_runtime.JSX.Element;

declare const SecondCol: () => react_jsx_runtime.JSX.Element;

type RegionContextType = {
    region?: HttpTypes.StoreRegion;
    regions: HttpTypes.StoreRegion[];
    setRegion: React.Dispatch<React.SetStateAction<HttpTypes.StoreRegion | undefined>>;
};
type RegionProviderProps = {
    children: React.ReactNode;
};
declare const RegionProvider: ({ children }: RegionProviderProps) => react_jsx_runtime.JSX.Element;
declare const useRegion: () => RegionContextType;

type CartContextType = {
    cart?: HttpTypes.StoreCart;
    addToCart: (variantId: string, quantity: number) => Promise<HttpTypes.StoreCart>;
    updateCart: (data: {
        updateData?: HttpTypes.StoreUpdateCart;
        shippingMethodData?: HttpTypes.StoreAddCartShippingMethods;
    }) => Promise<HttpTypes.StoreCart | undefined>;
    refreshCart: () => Promise<HttpTypes.StoreCart | undefined>;
    updateItemQuantity: (itemId: string, quantity: number) => Promise<HttpTypes.StoreCart>;
    unsetCart: () => void;
};
type CartProviderProps = {
    children: React.ReactNode;
};
declare const CartProvider: ({ children }: CartProviderProps) => react_jsx_runtime.JSX.Element;
declare const useCart: () => CartContextType;

interface FontContextType {
    fontBrand: string;
    fontUi: string;
}
interface FontProviderProps {
    children: React$1.ReactNode;
    fontBrand?: string;
    fontUi?: string;
}
declare const FontProvider: ({ children, fontBrand, fontUi }: FontProviderProps) => react_jsx_runtime.JSX.Element;
declare const useFont: () => FontContextType;

declare const useSearchParams: () => {
    get: (key: string) => string | null;
    set: (key: string, value: string) => void;
    delete: (key: string) => void;
    toString: () => string;
};
declare const useRouter: () => {
    push: (url: string) => void;
    replace: (url: string) => void;
    pathname: string;
    back: () => void;
    forward: () => void;
};
declare const getProductHandle: () => string | null;
declare const getMarketplaceView: () => "catalog" | "product";
declare const navigateToProduct: (productHandle: string, step?: string) => void;
declare const navigateToCatalog: () => void;
declare const buildUrl: (path: string, params?: Record<string, string>) => string;

declare const sdk: Medusa;

export { AddressForm, BrandText, CartProvider, ExpressCheckout, FontProvider, H1, H2, H3, H4, H5, H6, Layout, Marketplace, OAGExpressMarketplace, P, Payment, ProductCatalog, ProductSelection, RegionProvider, Router, SecondCol, ShippingOptions, UIText, buildUrl, getMarketplaceView, getProductHandle, navigateToCatalog, navigateToProduct, sdk, useCart, useFont, useRegion, useRouter, useSearchParams };
