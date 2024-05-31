import { createGlobalThemeContract } from '@vanilla-extract/css'

const themTokens = {
  color: {
    accent: '',
    accentForeground: '',
    destructiveForeground: ''
  },
  radii: {
    connectButton: '',
    connectModal: ''
  },
  padding: {
    connectButton: {
      paddingInline: '',
      paddingBlock: ''
    },
    connectModal: {
      paddingInline: '',
      paddingBlock: ''
    }
  },
  width: {
    connectModal: ''
  },
  height: {
    connectModal: ''
  },
  background: {
    clickable: {
      normal: '',
      hover: '',
      active: ''
    },
    overlay: '',
    connectModal: ''
  },
  fontSizes: {
    title: ''
  }
}

export const themeVars = createGlobalThemeContract(
  themTokens,
  (_, path) => `sk-${path.join('-')}`
)

export type ThemeVars = typeof themTokens
