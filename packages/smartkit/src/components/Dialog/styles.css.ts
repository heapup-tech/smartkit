import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const dialogOverlay = style({
  position: 'fixed',
  inset: 0,
  background: themeVars.background.overlay,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
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

const dialogHeader = style({
  display: 'flex',
  justifyContent: 'space-between'
})

export default {
  dialogOverlay,
  dialogContent,
  dialogHeader
}
