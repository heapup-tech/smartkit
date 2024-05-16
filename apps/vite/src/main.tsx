import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import { SmartKitClientProvider } from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new SuiClient({
  url: getFullnodeUrl('testnet')
})
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SmartKitClientProvider client={client}>
        <SmartKitProvider theme="default">
          <App />
        </SmartKitProvider>
      </SmartKitClientProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
