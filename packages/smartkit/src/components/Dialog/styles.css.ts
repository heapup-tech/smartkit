import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'

const dialogOverlay = style([
  sprinkles({
    alignItems: ['flexEnd', 'center']
  }),
  {
    position: 'fixed',
    inset: 0,
    background: themeVars.backgrounds.overlay,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 9999999
  }
])

const dialogContent = style([
  sprinkles({
    width: ['full', 'connectModal'],
    borderRadius: 'connectModal'
  }),
  {
    boxSizing: 'border-box',
    color: themeVars.colors.foreground,
    background: themeVars.backgrounds.connectModal,
    paddingBlock: themeVars.padding.connectModal.paddingBlock,
    paddingInline: themeVars.padding.connectModal.paddingInline
  }
])

export default {
  dialogOverlay,
  dialogContent
}
