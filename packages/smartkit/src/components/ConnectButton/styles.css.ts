import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const connectButton = style({
  all: 'initial',
  appearance: 'none',
  userSelect: 'none',
  margin: 0,
  padding: 0,
  borderStyle: 'solid',
  borderRadius: themeVars.radii.connectButton,
  display: 'flex',
  flexWrap: 'nowrap',
  cursor: 'pointer',
  height: '40px',
  lineHeight: '40px',
  borderWidth: 0,
  fontWeight: 500,
  paddingInline: themeVars.padding.connectButton.paddingInline,
  background: themeVars.background.connectButton.normal,
  color: themeVars.color.primary,
  ':active': {
    background: themeVars.background.connectButton.active
  }
})

export default {
  connectButton
}
