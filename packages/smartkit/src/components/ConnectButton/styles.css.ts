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
  paddingInline: themeVars.padding.connectButton.paddingInline,
  background: themeVars.background.connectButton.normal,
  borderWidth: 0,
  fontWeight: 500,
  ':active': {
    background: themeVars.background.connectButton.active
  }
})

export default {
  connectButton
}
