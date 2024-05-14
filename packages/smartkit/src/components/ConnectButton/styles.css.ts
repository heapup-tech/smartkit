import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import buttonStyle from '../Button/styles.css'

const connectButton = style([
  buttonStyle.animateButton,
  {
    borderRadius: themeVars.radii.connectButton,
    paddingInline: themeVars.padding.connectButton.paddingInline
  }
])

export default {
  connectButton
}
