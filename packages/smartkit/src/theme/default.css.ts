import { createGlobalTheme } from '@vanilla-extract/css'
import { themeVars } from './themeVars'
import { Theme } from './types'

const theme: Theme = 'default'
export const DefaultTheme = createGlobalTheme(
  `[data-theme-${theme}]`,
  themeVars,
  {
    color: {
      primary: '#373737'
    },
    radii: {
      connectButton: '10px',
      connectModal: '10px'
    },
    padding: {
      connectButton: {
        paddingInline: '12px',
        paddingBlock: '0'
      },
      connectModal: {
        paddingInline: '24px',
        paddingBlock: '29px 24px'
      }
    },
    width: {
      connectModal: '360px'
    },
    height: {
      connectModal: '446px'
    },
    background: {
      connectButton: {
        normal: '#F6F7F9',
        hover: '#EAECF1',
        active: '#EAECF1'
      },
      overlay: 'rgba(71, 88, 107, 0.24)',
      connectModal: '#fff'
    }
  }
)
