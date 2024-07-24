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

const connectStatus = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px'
})

const walletBrand = style([
  sprinkles({
    width: '16',
    height: '16',
    borderRadius: 'xlarge',
    paddingBlock: '1.5',
    paddingInline: '1.5'
  }),
  {
    position: 'relative'
  }
])

const walletIcon = style([
  sprinkles({
    width: '16',
    height: '16',
    position: 'absolute'
  })
])

const connectSpinner = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: themeVars.colors.accent
})

const connectRetry = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingInline: '1',
    paddingBlock: '1',
    borderRadius: 'full',
    columnGap: '2'
  }),
  {
    position: 'absolute',
    bottom: '0',
    right: '0',
    color: themeVars.colors.muted,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0,0,0,0.1)',
    background: themeVars.clickable.background.normal,
    ':hover': {
      background: themeVars.clickable.background.hover
    }
  }
])

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

const connectTitle = style([
  sprinkles({
    fontSize: ['3', '4'],
    fontWeight: 'semibold'
  }),
  {
    textAlign: 'center',
    width: '80%'
  }
])

const connectDesc = style([
  sprinkles({
    fontSize: ['2', '3'],
    marginTop: '3',
    fontWeight: 'normal'
  }),
  {
    color: themeVars.colors.muted
  }
])

const connectFailed = style({
  color: themeVars.colors.destructive
})

export default {
  connectContainer,
  connectContent,
  walletBrand,
  walletIcon,
  connectStatus,
  notInstalled,
  downloadButton,
  connectTitle,
  connectDesc,
  connectSpinner,
  connectRetry,
  connectFailed
}
