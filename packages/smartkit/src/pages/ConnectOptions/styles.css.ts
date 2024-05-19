import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const connectGroup = style({
  marginTop: '20px'
})

const connectGroupTitle = style({
  fontSize: '14px',
  fontWeight: '700',
  marginBottom: '8px',
  color: themeVars.color.accentForeground
})

const walletItem = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '10px',
  marginTop: '10px',
  transition: 'background 0.2s',
  borderRadius: '16px',
  fontWeight: '500',
  background: themeVars.background.clickable.normal,
  ':hover': {
    background: themeVars.background.clickable.hover
  }
})

const walletIcon = style({
  width: '32px',
  height: '32px',
  marginRight: '10px'
})

export default {
  connectGroup,
  connectGroupTitle,
  walletItem,
  walletIcon
}
