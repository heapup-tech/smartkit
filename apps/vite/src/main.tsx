import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'
import { SmartKitClientProvider } from '@heapup/smartkit-hooks'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmartKitClientProvider>
      <SmartKitProvider theme="default">
        <App />
      </SmartKitProvider>
    </SmartKitClientProvider>
  </React.StrictMode>
)
