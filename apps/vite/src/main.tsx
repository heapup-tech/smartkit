import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import { SmartKitClientProvider } from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'

const client = new SuiClient({
  url: getFullnodeUrl('testnet')
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmartKitClientProvider client={client}>
      <SmartKitProvider theme="default">
        <App />
      </SmartKitProvider>
    </SmartKitClientProvider>
  </React.StrictMode>
)
