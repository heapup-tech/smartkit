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
  },
  (_, path) => `sk-${path.join('-')}`
)
