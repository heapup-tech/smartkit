import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import {
  createConfig,
  SmartKitClientProvider,
  suietWallet
} from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})
const queryClient = new QueryClient()

const config = createConfig({
  suiClient: client,
  wallets: [suietWallet]
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <SmartKitClientProvider config={config}>
      <SmartKitProvider mode="dark">
        <App />
      </SmartKitProvider>
    </SmartKitClientProvider>
  </QueryClientProvider>
)
