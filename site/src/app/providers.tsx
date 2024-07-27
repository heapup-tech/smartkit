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
import { ThemeProvider, useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})

const config = createConfig({
  suiClient: client
  // wallets: [
  //   {
  //     groupName: 'Popular',
  //     wallets: [suietWallet]
  //   }
  // ]
})

type Mode = 'light' | 'dark' | 'auto'
export default function Providers({ children }: React.PropsWithChildren<{}>) {
  const { theme } = useTheme()

  const [mode, setMode] = useState<Mode>('light')

  useEffect(() => {
    if (theme) {
      theme === 'system' ? setMode('auto') : setMode(theme as Mode)
    }
  }, [theme])

  return (
    <SmartKitClientProvider config={config}>
      <SmartKitProvider theme="default" mode={mode}>
        {children}
      </SmartKitProvider>
    </SmartKitClientProvider>
  )
}
