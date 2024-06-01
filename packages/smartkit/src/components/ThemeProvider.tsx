import { createContext, PropsWithChildren, useContext } from 'react'
import { Mode, ThemeProps } from '../theme/types'

interface ThemeProviderProps {
  theme?: ThemeProps
  mode?: Mode
}

interface ThemeContextValue {
  theme: ThemeProps
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
