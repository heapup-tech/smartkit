import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client'
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient
} from '@tanstack/react-query'
import { createContext, useContext } from 'react'

interface SmartKitClientProviderProps {
  suiClient?: SuiClient
}

const DEFAULT_SUI_CLIENT = new SuiClient({
  url: getFullnodeUrl('mainnet')
})

type SmartKitClientContextType = SmartKitClientProviderProps &
  Required<Pick<SmartKitClientProviderProps, 'suiClient'>>

const SmartKitClientContext = createContext<SmartKitClientContextType | null>(
  null
)

export function SmartKitClientProvider({
  children,
  suiClient = DEFAULT_SUI_CLIENT
}: React.PropsWithChildren<SmartKitClientProviderProps>) {
  let queryClient: QueryClient | null = null
  try {
    queryClient = useQueryClient()
  } catch (error) {}

  const Provider = (
    <SmartKitClientContext.Provider
      value={{
        suiClient
      }}
    >
      {children}
    </SmartKitClientContext.Provider>
  )

  return !queryClient ? (
    <QueryClientProvider client={new QueryClient()}>
      {Provider}
    </QueryClientProvider>
  ) : (
    Provider
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
