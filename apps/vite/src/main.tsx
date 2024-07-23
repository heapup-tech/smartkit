import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import {
  createConfig,
  createWallet,
  SmartKitClientProvider
} from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@heapup/smartkit/styles.css'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})
const queryClient = new QueryClient()

const wallet1 = createWallet({
  name: 'Uni',
  icon: 'https://example.com/uni.png'
})
const wallet2 = createWallet({
  name: 'Uni2',
  icon: 'https://example.com/uni.png'
})
const wallet3 = createWallet({
  name: 'Uni3',
  icon: 'https://example.com/uni.png'
})
const wallet4 = createWallet({
  name: 'Uni4',
  icon: 'https://example.com/uni.png'
})
const wallet5 = createWallet({
  name: 'Uni5',
  icon: 'https://example.com/uni.png'
})
const wallet6 = createWallet({
  name: 'Uni6',
  icon: 'https://example.com/uni.png'
})
const wallet7 = createWallet({
  name: 'Uni7',
  icon: 'https://example.com/uni.png'
})
const config = createConfig({
  suiClient: client
  // wallets: [wallet1, wallet2, wallet3, wallet4, wallet5, wallet6, wallet7]
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <SmartKitClientProvider config={config}>
      <SmartKitProvider mode="auto">
        <App />
      </SmartKitProvider>
    </SmartKitClientProvider>
  </QueryClientProvider>
)
