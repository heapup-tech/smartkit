import { createGlobalThemeContract } from '@vanilla-extract/css'
import { DeepPartial } from '../utils/types'

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
export type PartialThemeVars = DeepPartial<ThemeVars>
