import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const dialogOverlay = style({
  position: 'fixed',
  inset: 0,
  background: themeVars.background.overlay,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999999
})

const dialogContent = style({
  boxSizing: 'border-box',
  width: themeVars.width.connectModal,
  height: themeVars.height.connectModal,
  borderRadius: themeVars.radii.connectModal,
  background: themeVars.background.connectModal,
  paddingBlock: themeVars.padding.connectModal.paddingBlock,
  paddingInline: themeVars.padding.connectModal.paddingInline
})

export default {
  dialogOverlay,
  dialogContent
}
