'use client'
import { SmartKitProvider } from '@heapup/smartkit'
import '@heapup/smartkit/styles.css'
import {
  SmartKitClientProvider,
  createConfig,
  okxWallet,
  suiWallet,
  suietWallet
} from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { ThemeProvider } from 'next-themes'
const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})

const config = createConfig({
  suiClient: client,
  wallets: [
    suiWallet,
    okxWallet,
    {
      groupName: 'Popular',
      wallets: [suietWallet]
    }
  ]
})

export default function Providers({ children }: React.PropsWithChildren<{}>) {
  return (
    <SmartKitClientProvider config={config}>
      <SmartKitProvider theme="default">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </SmartKitProvider>
    </SmartKitClientProvider>
  )
}
