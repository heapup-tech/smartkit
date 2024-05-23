import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const profileContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px'
})

const address = style({
  fontWeight: 600,
  fontSize: '18px'
})

const balance = style({
  color: themeVars.color.accentForeground
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
  background: themeVars.background.clickable.normal,
  ':hover': {
    background: themeVars.background.clickable.hover
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
