'use client'

import { SmartKitProvider } from '@heapup/smartkit'
import '@heapup/smartkit/styles.css'
import {
  createConfig,
  SmartKitClientProvider,
  suietWallet
} from '@heapup/smartkit-hooks'
import { PropsWithChildren } from 'react'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})
// const queryClient = new QueryClient()

const config = createConfig({
  suiClient: client,
  wallets: [suietWallet]
})
export default function Providers({ children }: PropsWithChildren) {
  return (
    <SmartKitClientProvider config={config}>
      <SmartKitProvider mode="auto">{children}</SmartKitProvider>
    </SmartKitClientProvider>
  )
}
