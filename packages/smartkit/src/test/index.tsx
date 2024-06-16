import { createConfig, SmartKitClientProvider } from '@heapup/smartkit-hooks'
import { render } from '@testing-library/react'
import { SmartKitProvider } from '../components/SmartKitProvider'
import { ReactElement } from 'react'
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'

const client = new SuiClient({
  url: getFullnodeUrl('mainnet')
})

export const renderWithTestProviders = (component: ReactElement) => {
  const config = createConfig({
    suiClient: client
  })

  return render(component, {
    wrapper: ({ children }) => (
      <SmartKitClientProvider config={config}>
        <SmartKitProvider>{children}</SmartKitProvider>
      </SmartKitClientProvider>
    )
  })
}
