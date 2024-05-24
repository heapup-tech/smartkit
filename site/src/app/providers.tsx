'use client'
import { SmartKitProvider } from '@heapup/smartkit'
import '@heapup/smartkit/styles.css'
import {
  SmartKitClientProvider,
  createConfig,
  suietWallet
} from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { ThemeProvider } from 'next-themes'
const client = new SuiClient({
  url: getFullnodeUrl('testnet')
})

const config = createConfig({
  suiClient: client,
  wallets: [suietWallet]
})

export default function Providers({ children }: React.PropsWithChildren<{}>) {
  return (
    <SmartKitClientProvider config={config}>
      <SmartKitProvider theme="default">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </SmartKitProvider>
    </SmartKitClientProvider>
  )
}
