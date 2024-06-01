# SmartKit

SmartKit is a react library that allows your dapp to connect to the sui network in a simple way.

## Quick Start

Manual install npm packages to your dapp project

```shell
# recommend
pnpm i @heapup/smartkit @heapup/smartkit-hooks @mysten/sui.js

# or
yarn i @heapup/smartkit @heapup/smartkit-hooks @mysten/sui.js

# or
npm i @heapup/smartkit @heapup/smartkit-hooks @mysten/sui.js
```

Config providers

```tsx
import '@heapup/smartkit/styles.css'
import { SmartKitProvider } from '@heapup/smartkit'
import { SmartKitClientProvider, createConfig } from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})

const config = createConfig({
  suiClient: client
})

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <SmartKitClientProvider config={config}>
      <SmartKitProvider theme="default" mode="auto">
        {children}
      </SmartKitProvider>
    </SmartKitClientProvider>
  )
}
```

### `@heapup/smartkit-hooks`

Built on `@mystan/sui.js` and `@mysten/wallet-standard`, these React hooks provide functions such as connecting to a wallet, querying on-chain data, and sending transactions.

### `@heapup/smartkit`

It's a connection modal based on @heapup/smartkit-hooks. Can be easily integrated into your dapp.

## Documentation

Visit https://smartkit.vercel.app to view the documentation.

# License

Licensed under the [MIT license](https://github.com/heapup-tech/smartkit/blob/main/LICENSE).
