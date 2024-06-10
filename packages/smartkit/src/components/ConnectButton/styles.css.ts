import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import buttonStyle from '../Button/styles.css'
import { sprinkles } from '../../theme/sprinkles.css'

const connectButton = style([
  sprinkles({
    height: ['8', '10'],
    lineHeight: ['8', '10']
  }),
  buttonStyle.animateButton,
  {
    borderRadius: themeVars.radii.connectButton
    // paddingInline: themeVars.padding.connectButton.paddingInline
  }
])

const balance = style({
  color: themeVars.colors.balance,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  height: '65%'
})

export default {
  connectButton,
  balance
}
