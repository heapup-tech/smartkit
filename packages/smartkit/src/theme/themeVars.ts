import { createGlobalThemeContract } from '@vanilla-extract/css'

export const themeVars = createGlobalThemeContract(
  {
    color: {
      primary: ''
    },
    radii: {
      connectButton: '',
      connectModal: ''
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
      },
      overlay: '',
      connectModal: ''
    }
  },
  (_, path) => `sk-${path.join('-')}`
)
