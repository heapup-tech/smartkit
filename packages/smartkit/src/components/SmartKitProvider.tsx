import { createContext, useContext, useState } from 'react'
import { Mode, Theme } from '../theme/types'
import { ConnectModal } from './ConnectModal'
import { useAutoConnect, useWatchWallet } from '@heapup/smartkit-hooks'
import { PageProvider } from '../pages/PageProvider'

interface SmartKitProviderProps {
  children: React.ReactNode
  theme?: Theme
  mode?: Mode
}

interface SmartKitProviderContext {
  theme?: Theme
  mode?: Mode
  // TODO: move to modal context
  open: boolean
  setOpen: (open: boolean) => void
}

export const SmartKitContext = createContext<SmartKitProviderContext | null>(
  null
)

export function SmartKitProvider({
  children,
  theme = 'default',
  mode = 'auto'
}: SmartKitProviderProps) {
  useAutoConnect()
  useWatchWallet()
  const [open, setOpen] = useState(false)

  return (
    <SmartKitContext.Provider
      value={{
        theme,
        mode,
        open,
        setOpen
      }}
    >
      <PageProvider>
        {children}

        <ConnectModal />
      </PageProvider>
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
