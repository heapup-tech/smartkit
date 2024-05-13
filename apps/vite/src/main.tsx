import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { SmartKitProvider } from '@heapup/smartkit'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmartKitProvider>
      <App />
    </SmartKitProvider>
  </React.StrictMode>
)
