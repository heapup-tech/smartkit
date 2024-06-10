import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const accountListWrapper = style({
  background: themeVars.backgrounds.connectModal,
  color: themeVars.colors.foreground,
  width: '100%',
  maxWidth: 'fit-content',
  borderRadius: '8px',
  padding: '16px',
  boxShadow: 'rgba(0, 0, 0, .1) 0px 2px 10px 0px'
})

const accountListHeader = style({
  color: themeVars.colors.muted,
  paddingLeft: '12px',
  fontSize: '14px'
})

export default {
  accountListWrapper,
  accountListHeader
}
