# oag-express-marketplace
OpticAg Express (mini) Marketplace

# OAG Express Marketplace

Embeddable React OpticAg Marketplace with express checkout for SaaS and partner platforms.

## Features

- Plug-and-play storefront UI
- TypeScript support
- Easily embeddable in any React app
- Sample product card and cart button components

## Installation

### Option 1: Install from Private Git Repository

```bash
npm install git+ssh://git@github.com:yourorg/express-storefront.git
# or
yarn add git+ssh://git@github.com:yourorg/express-storefront.git


## Usage

```TypeScript
import { ExpressStorefront } from "@oag/oag-express-marketplace";

// Where you want to embed the Marketplace, instantiate it:
<OAGExpressMarketplace userEmail={currentUserEmail} partnerId={yourOpticAgPartnerId} />
```
