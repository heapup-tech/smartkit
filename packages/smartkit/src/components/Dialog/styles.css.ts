import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const dialogOverlay = style({
  position: 'fixed',
  inset: 0,
  background: themeVars.backgrounds.overlay,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999999
})

const dialogContent = style({
  boxSizing: 'border-box',
  color: themeVars.colors.foreground,
  width: themeVars.width.connectModal,
  maxHeight: themeVars.height.connectModal,
  borderRadius: themeVars.radii.connectModal,
  background: themeVars.backgrounds.connectModal,
  paddingBlock: themeVars.padding.connectModal.paddingBlock,
  paddingInline: themeVars.padding.connectModal.paddingInline
})

export default {
  dialogOverlay,
  dialogContent
}
