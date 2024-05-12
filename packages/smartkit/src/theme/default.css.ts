import { createGlobalTheme } from '@vanilla-extract/css'
import { themeVars } from './themeVars'
import { Theme } from './types'

const theme: Theme = 'default'
export const DefaultTheme = createGlobalTheme(
  `[data-theme-${theme}]`,
  themeVars,
  {
    color: {
      primary: '#ff0000',
      secondary: '#00ff00'
    }
  }
)
