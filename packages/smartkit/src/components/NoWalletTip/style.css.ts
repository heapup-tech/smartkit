import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const noWalletTipContainer = style([
  {
    height: '42px',
    lineHeight: '42px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    color: themeVars.colors.muted,
    transition: 'color 0.2s',
    fontWeight: '500',
    fontSize: '15px',
    ':hover': {
      color: themeVars.colors.foreground
    }
  }
])

const link = style({
  color: 'inherit',
  textDecoration: 'none'
})

export default {
  noWalletTipContainer,
  link
}
