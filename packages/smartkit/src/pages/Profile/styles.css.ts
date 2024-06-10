import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'

const profileContent = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '3'
})

const address = sprinkles({
  fontWeight: ['medium', 'semibold'],
  fontSize: ['3', '4']
})

const balance = style({
  color: themeVars.colors.muted,
  height: '25px'
})

const buttonRow = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: '10px'
})
const buttonStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '10px',
  fontSize: '14px',
  fontWeight: 500,
  rowGap: '5px',
  marginTop: '10px',
  transition: 'background 0.1s',
  borderRadius: '16px',
  width: '100%',
  justifyContent: 'center',
  background: themeVars.clickable.background.normal,
  ':hover': {
    background: themeVars.clickable.background.hover
  }
})

const copyButton = style([buttonStyle])
const disConnectButton = style([buttonStyle])

export default {
  profileContent,
  address,
  balance,
  buttonRow,
  copyButton,
  disConnectButton
}
