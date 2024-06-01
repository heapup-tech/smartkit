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

const balance = style({
  color: themeVars.colors.balance,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px'
})

export default {
  connectButton,
  balance
}
