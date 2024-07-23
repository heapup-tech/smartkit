import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'

const dialogOverlay = style([
  sprinkles({
    alignItems: ['flexEnd', 'center'],
    zIndex: 'modal'
  }),
  {
    position: 'fixed',
    inset: 0,
    background: themeVars.backgrounds.overlay,
    display: 'flex',
    justifyContent: 'center'
  }
])

const dialogContent = style([
  sprinkles({
    width: ['full', 'connectModal'],
    borderTopLeftRadius: ['connectModal', 'connectModal'],
    borderTopRightRadius: ['connectModal', 'connectModal'],
    borderBottomLeftRadius: ['none', 'connectModal'],
    borderBottomRightRadius: ['none', 'connectModal'],
    position: ['absolute', 'relative'],
    fontSize: ['2', '3']
  }),
  {
    bottom: '0',
    boxSizing: 'border-box',
    color: themeVars.colors.foreground,
    background: themeVars.backgrounds.connectModal,
    paddingInline: themeVars.paddingInline.connectModal,
    paddingBlock: themeVars.paddingInline.connectModal
  }
])

export default {
  dialogOverlay,
  dialogContent
}
