import { createGlobalThemeContract } from '@vanilla-extract/css'

export const themeVars = createGlobalThemeContract(
  {
    color: {
      primary: '',
      secondary: ''
    }
  },
  (_, path) => `sk-${path.join('-')}`
)
