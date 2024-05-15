import { createContext, useContext } from 'react'
import { Mode, Theme } from '../theme/types'

interface SmartKitProviderProps {
  children: React.ReactNode
  theme?: Theme
  mode?: Mode
}

export const SmartKitContext = createContext<Omit<
  SmartKitProviderProps,
  'children'
> | null>(null)

export function SmartKitProvider({
  children,
  theme = 'default',
  mode = 'auto'
}: SmartKitProviderProps) {
  return (
    <SmartKitContext.Provider
      value={{
        theme,
        mode
      }}
    >
      {children}
    </SmartKitContext.Provider>
  )
}

export const useSmartKitContext = () => {
  const context = useContext(SmartKitContext)
  if (!context) {
    throw new Error('SmartKit must be used within a SmartKitProvider')
  }
  return context
}
