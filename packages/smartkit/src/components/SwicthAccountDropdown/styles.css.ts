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

const accountItem = style({
  background: themeVars.backgrounds.connectModal,
  color: themeVars.colors.foreground,
  borderRadius: '12px',
  padding: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  fontWeight: '450',
  ':hover': {
    background: themeVars.clickable.background.hover
  }
})

const selectAccountItem = style({
  background: themeVars.clickable.background.active,
  color: themeVars.colors.foreground,
  borderRadius: '12px',
  padding: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  fontWeight: '450'
})

export default {
  accountListWrapper,
  accountItem,
  selectAccountItem
}
