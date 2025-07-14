# OAG Express Marketplace

## Project Overview

This is an **embeddable React component library** that provides a MedusaJS-powered storefront for integration into NextJS/React TypeScript applications. The project is based on the [MedusaJS Express Checkout storefront demo](https://docs.medusajs.com/resources/storefront-development/guides/express-checkout) and is designed to be a plug-and-play marketplace solution for SaaS and partner platforms.

## Architecture

- **Type**: Embeddable React component library
- **Target Environment**: NextJS/React TypeScript applications
- **Backend**: MedusaJS commerce platform
- **Styling**: TailwindCSS with MedusaJS UI components
- **Build System**: tsup for dual CJS/ESM output
- **TypeScript**: Full TypeScript support with type definitions

## Key Features

- 🔌 **Injectable Component**: Designed to be easily embedded into existing React applications
- 🛒 **Express Checkout**: Fast, streamlined checkout process
- 🎨 **MedusaJS UI**: Pre-styled components using MedusaJS UI library
- 📱 **Responsive Design**: TailwindCSS-powered responsive layouts
- 🔧 **TypeScript Support**: Full type safety and IntelliSense support
- 🏪 **Storefront Components**: Product cards, cart management, region selection

## Project Structure

```
src/
├── components/
│   ├── CartButton.tsx          # Cart interaction component
│   ├── ProductCard.tsx         # Product display component
│   ├── Storefront.tsx          # Main storefront component
│   └── SecondCol/              # Additional UI components
├── providers/
│   ├── cart.tsx                # Cart state management
│   └── region.tsx              # Region/location state management
├── lib/
│   └── sdk.ts                  # MedusaJS SDK configuration
└── index.tsx                   # Main export file
```

## Dependencies

### Core Dependencies
- `@medusajs/js-sdk`: MedusaJS JavaScript SDK for API communication
- `@medusajs/types`: TypeScript type definitions for MedusaJS
- `@medusajs/ui`: Pre-built UI components
- `@medusajs/ui-preset`: TailwindCSS preset for MedusaJS styling
- `@medusajs/icons`: Icon library

### Peer Dependencies
- `react`: ^18.0.0
- `react-dom`: ^18.0.0

### Development Dependencies
- `typescript`: ^5.0.0
- `tsup`: Build tool for TypeScript libraries
- `tailwindcss`: ^3.4.17
- `@types/react`: TypeScript definitions for React

## Configuration

The component requires configuration parameters passed directly to the component:

## Installation

```bash
npm install @oag/oag-express-marketplace
```

## Usage

### Basic Implementation

```typescript
import { OAGExpressMarketplace } from "@oag/oag-express-marketplace";

// In your React component
function MyApp() {
  return (
    <div>
      <OAGExpressMarketplace 
        backendUrl="http://localhost:9000"
        publishableKey="your_publishable_key"
      />
    </div>
  );
}
```

### Advanced Usage with Providers

```typescript
import { RegionProvider } from "@oag/oag-express-marketplace";
import { CartProvider } from "@oag/oag-express-marketplace";

function App() {
  return (
    <RegionProvider>
      <CartProvider>
        <OAGExpressMarketplace 
          backendUrl="http://localhost:9000"
          publishableKey="your_publishable_key"
        />
      </CartProvider>
    </RegionProvider>
  );
}
```

## Development Status

Currently implementing MedusaJS Express Checkout guide features:
- ✅ Basic storefront setup
- ✅ Product display components
- ✅ Cart functionality
- ✅ Region management
- 🔄 **Current**: Step 5 - Add Select Styling (in progress)
- ⏳ Upcoming: Checkout flow completion

## Build Commands

```bash
# Build the library
npm run build

# Development mode with watch
npm run dev

# Clean build artifacts
npm run clean
```

## Output

The build process generates:
- `dist/index.cjs.js` - CommonJS build
- `dist/index.esm.js` - ESM build  
- `dist/index.d.ts` - TypeScript definitions

## Integration Notes

1. **TailwindCSS**: The consuming application should include the MedusaJS UI preset in its Tailwind configuration
2. **Configuration**: Pass MedusaJS backend URL and publishable key directly to the component props
3. **React Version**: Requires React 18+
4. **TypeScript**: Full TypeScript support available

## Provider Architecture

The component uses React Context providers for state management:

- **RegionProvider**: Manages geographical regions and currency
- **CartProvider**: Handles cart state and operations
- **SDK Configuration**: Centralized MedusaJS SDK setup

## Styling

- Uses TailwindCSS for responsive design
- MedusaJS UI components for consistent commerce UI patterns
- Customizable through Tailwind configuration
- Dark mode support included

## Marketplace Configuration

- **Default Currency**: CAD is the default currency for this marketplace

## License

UNLICENSED - Private project