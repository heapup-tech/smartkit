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
  name: 'Common Sui Wallet',
  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiByeD0iMTYiIGZpbGw9IiM2RkJDRjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC40MjEzIDUyLjc4MzhDMjMuNjQ5NiA1OC4zNzYgMjkuNDMyMSA2MS43MTQyIDM1Ljg4ODggNjEuNzE0MkM0Mi4zNDU1IDYxLjcxNDIgNDguMTI3IDU4LjM3NiA1MS4zNTY0IDUyLjc4MzhDNTQuNTg0OCA0Ny4xOTI2IDU0LjU4NDggNDAuNTE2MyA1MS4zNTY0IDM0LjkyNEwzNy43NTI0IDExLjM2MTVDMzYuOTI0MSA5LjkyNzAxIDM0Ljg1MzUgOS45MjcwMSAzNC4wMjUzIDExLjM2MTVMMjAuNDIxMyAzNC45MjRDMTcuMTkyOSA0MC41MTUyIDE3LjE5MjkgNDcuMTkxNSAyMC40MjEzIDUyLjc4MzhaTTMyLjA1NjYgMjIuNTcxM0wzNC45NTcxIDE3LjU0NzRDMzUuMzcxMiAxNi44MzAxIDM2LjQwNjUgMTYuODMwMSAzNi44MjA2IDE3LjU0NzRMNDcuOTc5MSAzNi44NzQ4QzUwLjAyOTEgNDAuNDI1NCA1MC40MTM5IDQ0LjUzNSA0OS4xMzM1IDQ4LjI5NTRDNDkuMDAwMiA0Ny42ODE5IDQ4LjgxMzggNDcuMDU0MiA0OC41NjI2IDQ2LjQyMDFDNDcuMDIxMyA0Mi41MzA0IDQzLjUzNjMgMzkuNTI4OSAzOC4yMDIzIDM3LjQ5ODJDMzQuNTM1MSAzNi4xMDcxIDMyLjE5NDMgMzQuMDYxMyAzMS4yNDMxIDMxLjQxNzFDMzAuMDE4IDI4LjAwODkgMzEuMjk3NiAyNC4yOTI0IDMyLjA1NjYgMjIuNTcxM1pNMjcuMTEwNyAzMS4xMzc5TDIzLjc5ODYgMzYuODc0OEMyMS4yNzQ4IDQxLjI0NTkgMjEuMjc0OCA0Ni40NjQxIDIzLjc5ODYgNTAuODM1M0MyNi4zMjIzIDU1LjIwNjQgMzAuODQxMyA1Ny44MTUgMzUuODg4OCA1Ny44MTVDMzkuMjQxMyA1Ny44MTUgNDIuMzYxNSA1Ni42NjMzIDQ0LjgxODQgNTQuNjA4OEM0NS4xMzg4IDUzLjgwMjEgNDYuMTMxIDUwLjg0OTIgNDQuOTA1MiA0Ny44MDU4QzQzLjc3MyA0NC45OTU0IDQxLjA0ODIgNDIuNzUxOSAzNi44MDYxIDQxLjEzNkMzMi4wMTEgMzkuMzE3MSAyOC44OTU4IDM2LjQ3NzQgMjcuNTQ4NiAzMi42OTg0QzI3LjM2MzEgMzIuMTc4MSAyNy4yMTg5IDMxLjY1NjggMjcuMTEwNyAzMS4xMzc5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+',
  downloadUrl: 'www.baidu.com'
})

const config = createConfig({
  suiClient: client
  // wallets: [wallet1]
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
