import { style } from '@vanilla-extract/css'
import buttonStyle from '../../components/Button/styles.css'
import { themeVars } from '../../theme/themeVars'

const connectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%'
})

const connectContent = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  minHeight: '220px'
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

const connectStatus = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px'
})

const connectingText = style({
  color: themeVars.color.accentForeground,
  fontSize: themeVars.fontSizes.title
})

const connectFailedText = style({
  color: themeVars.color.destructiveForeground,
  fontSize: themeVars.fontSizes.title,
  fontWeight: 500
})

const retryButton = style([
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
  connectStatus,
  notInstalled,
  downloadButton,
  connectingText,
  connectFailedText,
  retryButton
}
