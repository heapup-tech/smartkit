import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import buttonStyle from '../Button/styles.css'
import { sprinkles } from '../../theme/sprinkles.css'

const connectButton = style([
  buttonStyle.animateButton,
  {
    borderRadius: themeVars.radii.connectButton,
    paddingInline: themeVars.padding.connectButton.paddingInline
  }
])

const balance = style({
  color: themeVars.color.accentForeground,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px'
})

// const balance = sprinkles({
//   color: {
//     light: 'blue-50',
//     dark: 'gray-900'
//   }
// })

export default {
  connectButton,
  balance
}
