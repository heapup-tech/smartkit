import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import { createConfig, SmartKitClientProvider } from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import '@heapup/smartkit/styles.css'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})

const config = createConfig({
  suiClient: client
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <SmartKitClientProvider config={config}>
    <SmartKitProvider mode="auto">
      <App />
    </SmartKitProvider>
  </SmartKitClientProvider>
)
