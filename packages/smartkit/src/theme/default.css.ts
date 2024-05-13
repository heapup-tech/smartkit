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
    },
    radii: {
      connectButton: '10px'
    },
    padding: {
      connectButton: {
        paddingInline: '12px',
        paddingBlock: '0'
      }
    },
    background: {
      connectButton: {
        normal: '#F6F7F9',
        hover: '#EAECF1',
        active: '#EAECF1'
      }
    }
  }
)
