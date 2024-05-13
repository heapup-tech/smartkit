import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const overlay = style({
  position: 'fixed',
  inset: 0,
  background: themeVars.background.overlay,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const content = style({
  borderRadius: themeVars.radii.connectModal,
  background: themeVars.background.connectModal
})

export default {
  overlay,
  content
}
