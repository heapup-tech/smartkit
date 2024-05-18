import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const animateButton = style({
  all: 'initial',
  appearance: 'none',
  userSelect: 'none',
  margin: 0,
  padding: 0,
  borderStyle: 'solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  cursor: 'pointer',
  height: '40px',
  lineHeight: '40px',
  borderWidth: 0,
  fontWeight: 500,
  fontSize: '14px',
  paddingInline: '5px',
  background: themeVars.background.clickable.normal,
  ':hover': {
    background: themeVars.background.clickable.hover
  },
  ':active': {
    background: themeVars.background.clickable.active
  },
  transition: 'background 0.2s ease-in-out'
})

const iconButton = style([
  animateButton,
  {
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    padding: 0,
    background: 'transparent',
    color: '#999999'
  }
])

export default {
  animateButton,
  iconButton
}
