import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'

const animateButton = style([
  sprinkles({
    all: 'initial',
    display: 'flex',
    columnGap: ['1', '2'],
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    cursor: 'pointer',
    borderRadius: 'standard',
    paddingInline: ['1.5', '3'],
    fontSize: ['2', '3'],
    fontWeight: ['normal', 'medium']
  }),
  {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    userSelect: 'none',
    margin: 0,
    borderWidth: 0,
    borderStyle: 'solid',
    color: themeVars.colors.foreground,
    background: themeVars.clickable.background.normal,
    ':hover': {
      background: themeVars.clickable.background.hover
    },
    ':active': {
      background: themeVars.clickable.background.active
    },
    transition: 'background 0.2s ease-in-out'
  }
])

const iconButton = style([
  sprinkles({
    width: '8',
    height: '8'
  }),
  animateButton,
  {
    borderRadius: '50%',
    padding: 0,
    background: 'transparent',
    color: '#999999'
  }
])

export default {
  animateButton,
  iconButton
}
