import { createContext, useContext } from 'react'
import { Mode, Theme, ThemeProps } from '../theme/types'
import { ConnectModal } from './ConnectModal'
import { useAutoConnect, useWatchWallet } from '@heapup/smartkit-hooks'
import { PageProvider } from '../pages/PageProvider'
import { themeToCssString } from '../theme/themeToCssString'
import { DefaultTheme } from '../theme/default'
import { PartialThemeVars, ThemeVars } from '../theme/themeVars'
import { ModalProvider } from './ModalProvider'
import { ThemeProvider } from './ThemeProvider'

import { assign } from 'radash'

interface SmartKitProviderProps {
  children: React.ReactNode
  theme?: Theme | PartialThemeVars
  mode?: Mode
}

interface SmartKitProviderContext {}

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

  const themeName: ThemeProps = typeof theme === 'string' ? theme : 'custom'

  let lightTheme: ThemeVars = DefaultTheme.light
  let darkTheme: ThemeVars = DefaultTheme.dark

  switch (themeName) {
    case 'custom':
      if (mode === 'light') {
        lightTheme = assign<ThemeVars>(DefaultTheme.light, theme as ThemeVars)
      } else if (mode === 'dark') {
        darkTheme = assign<ThemeVars>(DefaultTheme.dark, theme as ThemeVars)
      } else {
        lightTheme = assign<ThemeVars>(DefaultTheme.light, theme as ThemeVars)
        darkTheme = assign<ThemeVars>(DefaultTheme.dark, theme as ThemeVars)
      }
  }

  const themeTag = `data-theme-${themeName}`

  let themeCssString: string[] = []

  if (mode === 'light') {
    const lightThemeCssString = `[${themeTag}]{${themeToCssString(lightTheme)}}`
    themeCssString = [lightThemeCssString]
  } else if (mode === 'dark') {
    const darkThemeCssString = `[${themeTag}]{${themeToCssString(darkTheme)}}`
    themeCssString = [darkThemeCssString]
  } else {
    const lightThemeCssString = `[${themeTag}]{${themeToCssString(lightTheme)}}`
    const darkThemeCssString = `[${themeTag}]{${themeToCssString(darkTheme)}}`
    themeCssString = [
      lightThemeCssString,
      `@media(prefers-color-scheme:dark){ ${darkThemeCssString} }`
    ]
  }

  return (
    <SmartKitContext.Provider value={{}}>
      <ThemeProvider theme={themeName} mode={mode}>
        <ModalProvider>
          <PageProvider>
            <style
              dangerouslySetInnerHTML={{
                __html: themeCssString.join('')
              }}
            />
            {children}
            <ConnectModal />
          </PageProvider>
        </ModalProvider>
      </ThemeProvider>
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
