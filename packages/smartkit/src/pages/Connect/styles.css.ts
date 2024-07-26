import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'
import buttonStyle from '../../components/Button/styles.css'

const connectContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '220px',
  gap: '16px'
})

const connectStatus = style({
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center'
})

const walletBrand = style([
  sprinkles({
    width: '20',
    height: '20',
    borderRadius: 'xlarge',
    paddingBlock: '1.5',
    paddingInline: '1.5'
  }),
  {
    position: 'relative',
    boxSizing: 'border-box'
  }
])

const walletIcon = style([
  sprinkles({
    width: '16',
    height: '16',
    position: 'absolute'
  }),
  {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
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

const downloadButton = style([
  sprinkles({
    height: ['6', '8'],
    lineHeight: ['6', '8'],
    borderRadius: ['small', 'standard'],
    paddingInline: ['1.5', '3']
  }),
  {
    color: themeVars.colors.accent
  },
  buttonStyle.animateButton
])

const connectTitle = style([
  sprinkles({
    fontSize: ['3', '4'],
    fontWeight: 'semibold'
  }),
  {
    textAlign: 'center',
    padding: '0 5%'
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
  connectContent,
  walletBrand,
  walletIcon,
  connectStatus,
  connectTitle,
  connectDesc,
  connectSpinner,
  connectRetry,
  connectFailed,
  downloadButton
}
