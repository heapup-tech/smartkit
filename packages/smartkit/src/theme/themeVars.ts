import { createGlobalThemeContract } from '@vanilla-extract/css'

const themTokens = {
  colors: {
    accent: '',
    foreground: '',
    muted: '',
    connectButton: '',
    iconButton: '',
    balance: '',
    destructive: ''
  },
  backgrounds: {
    overlay: '',
    connectModal: ''
  },
  clickable: {
    background: {
      normal: '',
      hover: '',
      active: ''
    }
  },
  width: {
    connectModal: ''
  },
  maxHeight: {
    connectModal: ''
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
  }
}

export const themeVars = createGlobalThemeContract(
  themTokens,
  (_, path) => `sk-${path.join('-')}`
)

export type ThemeVars = typeof themTokens
