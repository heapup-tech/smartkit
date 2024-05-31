import { assignInlineVars } from '@vanilla-extract/dynamic'
import { ThemeVars, themeVars } from './themeVars'

export function themeToCssString(theme: ThemeVars) {
  return Object.entries(assignInlineVars(themeVars, theme))
    .map(([key, value]) => `${key}:${value};`)
    .join('')
}
