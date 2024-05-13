import { createGlobalThemeContract } from '@vanilla-extract/css'

export const themeVars = createGlobalThemeContract(
  {
    color: {
      primary: '',
      secondary: ''
    },
    radii: {
      connectButton: ''
    },
    padding: {
      connectButton: {
        paddingInline: '',
        paddingBlock: ''
      }
    },
    background: {
      connectButton: {
        normal: '',
        hover: '',
        active: ''
      }
    }
  },
  (_, path) => `sk-${path.join('-')}`
)
