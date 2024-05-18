import {
  QueryClient,
  QueryClientProvider,
  useQueryClient
} from '@tanstack/react-query'
import { createContext, useContext } from 'react'
import { Config } from './createConfig'

interface SmartKitClientProviderProps {
  config: Config
}

export const SmartKitClientContext = createContext<
  | {
      config: Config
    }
  | undefined
>(undefined)

export function SmartKitClientProvider({
  children,
  config
}: React.PropsWithChildren<SmartKitClientProviderProps>) {
  let queryClient: QueryClient | null = null
  try {
    queryClient = useQueryClient()
  } catch (error) {}

  const Provider = (
    <SmartKitClientContext.Provider
      value={{
        config
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
