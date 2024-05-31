import { createContext, PropsWithChildren, useContext } from 'react'
import { Mode, Theme } from '../theme/types'
import { ThemeVars } from '../theme/themeVars'

interface ThemeProviderProps {
  theme?: Theme | ThemeVars
  mode?: Mode
}

interface ThemeContextValue {
  theme: Theme | ThemeVars
  mode: Mode
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'default',
  mode: 'auto'
})

export function ThemeProvider({
  children,
  theme = 'default',
  mode = 'auto'
}: PropsWithChildren<ThemeProviderProps>) {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('Can not find ThemeProvider')
  }

  return context
}
