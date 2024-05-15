import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import { createContext, useContext } from 'react'

interface SmartKitClientProviderProps {
  children: React.ReactNode
  client?: SuiClient
}

const DEFAULT_CLIENT = new SuiClient({
  url: getFullnodeUrl('mainnet')
})

const SmartKitClientContext = createContext<Omit<
  SmartKitClientProviderProps,
  'children'
> | null>(null)

export function SmartKitClientProvider({
  children,
  client = DEFAULT_CLIENT
}: SmartKitClientProviderProps) {
  return (
    <SmartKitClientContext.Provider
      value={{
        client
      }}
    >
      {children}
    </SmartKitClientContext.Provider>
  )
}
export const useSmartKitClientContext = () => {
  const context = useContext(SmartKitClientContext)
  if (!context) {
    throw new Error(
      'SmartKitClient must be used within a SmartKitClientContext'
    )
  }
  return context
}
