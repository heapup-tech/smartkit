import { createGlobalTheme } from '@vanilla-extract/css'
import { themeVars } from './themeVars'
import { Theme } from './types'

const theme: Theme = 'retro'
export const RetroTheme = createGlobalTheme(
  `[data-theme-${theme}]`,
  themeVars,
  {
    color: {
      primary: '#00ff00',
      secondary: '#00ff00'
    }
  }
)
