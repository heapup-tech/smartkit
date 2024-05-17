import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import {
  bitgetWallet,
  createConfig,
  okxWallet,
  SmartKitClientProvider,
  suietWallet,
  suiWallet
} from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new SuiClient({
  url: getFullnodeUrl('testnet')
})
const queryClient = new QueryClient()

const config = createConfig({
  suiClient: client,
  wallets: [
    {
      groupName: 'Ou',
      wallets: [okxWallet, suiWallet, suietWallet]
    },
    {
      groupName: 'Ou',
      wallets: [okxWallet, suiWallet, suietWallet]
    },
    {
      groupName: 'Installed',
      wallets: [okxWallet, suiWallet, bitgetWallet, suietWallet]
    }
  ]
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SmartKitClientProvider config={config}>
        <SmartKitProvider theme="default">
          <App />
        </SmartKitProvider>
      </SmartKitClientProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
