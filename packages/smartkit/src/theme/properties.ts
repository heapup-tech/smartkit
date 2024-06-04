import { themeVars } from './themeVars'

export const unresponsiveProperties = {}

export const responsiveProperties = {
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex'
  },
  position: ['relative', 'absolute', 'fixed'],
  borderRadius: {
    none: '0px',
    full: '9999px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    ...themeVars.radii
  }
} as const
