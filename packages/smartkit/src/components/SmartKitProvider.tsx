import { createContext, useContext, useState } from 'react'
import { Mode, Theme } from '../theme/types'
import { ConnectModal } from './ConnectModal'
import { useAutoConnect, useWatchWallet } from '@heapup/smartkit-hooks'
import { PageProvider } from '../pages/PageProvider'
import { themeToCssString } from '../theme/themeToCssString'
import { DefaultTheme } from '../theme/default'
import { ThemeVars } from '../theme/themeVars'

interface SmartKitProviderProps {
  children: React.ReactNode
  theme?: Theme | ThemeVars
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

  const themeTag = `data-theme-${theme}`
  const lightThemeCssString = `[${themeTag}]{${themeToCssString(
    DefaultTheme.light
  )}}`
  const darkThemeCssString = `[${themeTag}]{${themeToCssString(
    DefaultTheme.dark
  )}}`

  let themeCssString: string[] = []
  if (mode === 'auto')
    themeCssString = [
      lightThemeCssString,
      `@media(prefers-color-scheme:dark){ ${darkThemeCssString} }`
    ]
  else if (mode === 'light') themeCssString = [lightThemeCssString]
  else if (mode === 'dark') themeCssString = [darkThemeCssString]

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
        <style
          dangerouslySetInnerHTML={{
            __html: themeCssString.join('')
          }}
        />
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
