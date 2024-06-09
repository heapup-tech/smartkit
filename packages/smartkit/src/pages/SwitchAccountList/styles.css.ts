import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const accountListWrapper = style({
  background: themeVars.backgrounds.connectModal,
  color: themeVars.colors.foreground,
  width: '100%'
})

const accountItem = style({
  background: themeVars.backgrounds.connectModal,
  color: themeVars.colors.foreground,
  borderRadius: '12px',
  height: '40px',
  lineHeight: '40px',
  padding: '0 12px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  fontWeight: '500',
  ':hover': {
    background: themeVars.clickable.background.hover
  }
})

const selectAccountItem = style({
  background: themeVars.clickable.background.active,
  color: themeVars.colors.foreground,
  borderRadius: '12px',
  height: '40px',
  lineHeight: '40px',
  padding: '0 12px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  fontWeight: '500'
})

export default {
  accountListWrapper,
  accountItem,
  selectAccountItem
}
