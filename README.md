# @quantum-forge/tik-tok-business-sdk

A modern TypeScript SDK for the TikTok Business API, built with full TypeScript support and modern JavaScript features.

## Features

- Full TypeScript support with strict type checking
- Modern JavaScript features (ESM, optional chaining, nullish coalescing)
- Comprehensive type definitions for all API models and responses
- Built with strict null checks and exact optional property types
- Tree-shakeable exports for optimal bundle size
- Type-safe API client with auto-completion support

## Installation

```bash
npm install @quantum-forge/tik-tok-business-sdk
```

## Usage

```typescript
import { ApiClient } from '@quantum-forge/tik-tok-business-sdk';
import type { AdCreateBody } from '@quantum-forge/tik-tok-business-sdk';

// Initialize the client with your credentials
const client = new ApiClient({
    accessToken: 'YOUR_ACCESS_TOKEN',
    sandbox: false // Set to true for sandbox environment
});

// All request and response types are fully typed
async function createAd(adData: AdCreateBody) {
    const response = await client.ad.createAd(adData);
    return response.data;
}
```

## TypeScript Configuration

This SDK is built with strict TypeScript settings and requires TypeScript 4.5 or later. We recommend using the following `tsconfig.json` settings for optimal type checking:

```json
{
  "compilerOptions": {
    "strict": true,
    "exactOptionalPropertyTypes": true,
    "esModuleInterop": true
  }
}
```

## Development

```bash
# Install dependencies
npm install

# Build the SDK
npm run build

# Run tests
npm test
```

## License

MIT - see LICENSE

## Author

Riley Seaburg <riley@rileyseaburg.com>

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

