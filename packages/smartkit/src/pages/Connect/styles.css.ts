import { style } from '@vanilla-extract/css'
import buttonStyle from '../../components/Button/styles.css'
import { themeVars } from '../../theme/themeVars'

const connectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const connectContent = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1
})
const walletIcon = style({
  width: '64px',
  height: '64px'
})

const notInstalled = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
})

const downloadButton = style([
  buttonStyle.animateButton,
  {
    borderRadius: themeVars.radii.connectButton,
    paddingInline: themeVars.padding.connectButton.paddingInline,
    cursor: 'pointer'
  }
])

export default {
  connectContainer,
  connectContent,
  walletIcon,
  notInstalled,
  downloadButton
}
