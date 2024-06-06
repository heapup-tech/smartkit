import { style } from '@vanilla-extract/css'
import buttonStyle from '../../components/Button/styles.css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'

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

const walletIcon = sprinkles({
  width: '16',
  height: '16'
})

const notInstalled = style([
  sprinkles({
    rowGap: ['2', '3']
  }),
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
])

const downloadButton = style([
  sprinkles({
    height: ['6', '8'],
    lineHeight: ['6', '8'],
    borderRadius: ['small', 'standard'],
    paddingInline: ['1.5', '3']
  }),
  buttonStyle.animateButton
])

const connectStatus = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px'
})

const connectingText = sprinkles({
  fontSize: '3'
})

const connectFailedText = style({
  color: themeVars.colors.destructive,
  fontWeight: 500
})

const retryButton = style([
  sprinkles({
    height: ['6', '8'],
    lineHeight: ['6', '8'],
    borderRadius: ['small', 'standard'],
    paddingInline: ['1.5', '3']
  }),
  buttonStyle.animateButton,
  {
    minWidth: '100%'
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
