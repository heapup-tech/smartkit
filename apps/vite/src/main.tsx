import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import {
  createConfig,
  createWallet,
  SmartKitClientProvider,
  suietWallet
} from '@heapup/smartkit-hooks'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})
const queryClient = new QueryClient()

const brwoserWallet = createWallet({
  name: 'Browser',
  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjZGIyNzc3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA4YTggOCAwIDAgMS03LjAyMiA3Ljk0bDEuOTAyLTcuMDk4YTMgMyAwIDAgMCAuMDUtMS40OTJBMyAzIDAgMCAwIDEwLjIzNyA2aDUuNTExQTggOCAwIDAgMSAxNiA4TTAgOGE4IDggMCAwIDAgNy45MjcgOGwxLjQyNi01LjMyMWEzIDMgMCAwIDEtLjcyMy4yNTVhMyAzIDAgMCAxLTEuNzQzLS4xNDdhMyAzIDAgMCAxLTEuMDQzLS43TC42MzMgNC44NzZBOCA4IDAgMCAwIDAgOG01LjAwNC0uMTY3TDEuMTA4IDMuOTM2QTguMDAzIDguMDAzIDAgMCAxIDE1LjQxOCA1SDguMDY2YTMgMyAwIDAgMC0xLjI1Mi4yNDNhMi45OSAyLjk5IDAgMCAwLTEuODEgMi41OU04IDEwYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNCIvPjwvc3ZnPg==',
  downloadUrl: 'https://sui.et'
})
const brwoserWallet2 = createWallet({
  name: 'Browser2',
  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjZGIyNzc3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA4YTggOCAwIDAgMS03LjAyMiA3Ljk0bDEuOTAyLTcuMDk4YTMgMyAwIDAgMCAuMDUtMS40OTJBMyAzIDAgMCAwIDEwLjIzNyA2aDUuNTExQTggOCAwIDAgMSAxNiA4TTAgOGE4IDggMCAwIDAgNy45MjcgOGwxLjQyNi01LjMyMWEzIDMgMCAwIDEtLjcyMy4yNTVhMyAzIDAgMCAxLTEuNzQzLS4xNDdhMyAzIDAgMCAxLTEuMDQzLS43TC42MzMgNC44NzZBOCA4IDAgMCAwIDAgOG01LjAwNC0uMTY3TDEuMTA4IDMuOTM2QTguMDAzIDguMDAzIDAgMCAxIDE1LjQxOCA1SDguMDY2YTMgMyAwIDAgMC0xLjI1Mi4yNDNhMi45OSAyLjk5IDAgMCAwLTEuODEgMi41OU04IDEwYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNCIvPjwvc3ZnPg==',
  downloadUrl: 'https://sui.et'
})
const brwoserWallet3 = createWallet({
  name: 'Browser3',
  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjZGIyNzc3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA4YTggOCAwIDAgMS03LjAyMiA3Ljk0bDEuOTAyLTcuMDk4YTMgMyAwIDAgMCAuMDUtMS40OTJBMyAzIDAgMCAwIDEwLjIzNyA2aDUuNTExQTggOCAwIDAgMSAxNiA4TTAgOGE4IDggMCAwIDAgNy45MjcgOGwxLjQyNi01LjMyMWEzIDMgMCAwIDEtLjcyMy4yNTVhMyAzIDAgMCAxLTEuNzQzLS4xNDdhMyAzIDAgMCAxLTEuMDQzLS43TC42MzMgNC44NzZBOCA4IDAgMCAwIDAgOG01LjAwNC0uMTY3TDEuMTA4IDMuOTM2QTguMDAzIDguMDAzIDAgMCAxIDE1LjQxOCA1SDguMDY2YTMgMyAwIDAgMC0xLjI1Mi4yNDNhMi45OSAyLjk5IDAgMCAwLTEuODEgMi41OU04IDEwYTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNCIvPjwvc3ZnPg==',
  downloadUrl: 'https://sui.et'
})
const config = createConfig({
  suiClient: client,
  wallets: [suietWallet, brwoserWallet, brwoserWallet2, brwoserWallet3]
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <SmartKitClientProvider config={config}>
      <SmartKitProvider theme="default" mode="dark">
        <App />
      </SmartKitProvider>
    </SmartKitClientProvider>
  </QueryClientProvider>
)
