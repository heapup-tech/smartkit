import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'

const connectGroup = style({
  marginTop: '20px',
  ':first-child': {
    marginTop: 0
  }
})

const connectGroupTitle = style([
  sprinkles({
    fontSize: '2',
    fontWeight: 'semibold',
    marginBottom: '2'
  }),
  {
    letterSpacing: '1px'
  }
])

const walletItem = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontWeight: 'normal',
    borderRadius: ['large'],
    paddingInline: '3',
    paddingBlock: '3'
  }),
  {
    marginTop: '10px',
    transition: 'background 0.2s',
    background: themeVars.clickable.background.normal,
    ':hover': {
      background: themeVars.clickable.background.hover
    }
  }
])

const walletIcon = sprinkles({
  width: ['6', '8'],
  height: ['6', '8'],
  marginRight: '2.5'
})

export default {
  connectGroup,
  connectGroupTitle,
  walletItem,
  walletIcon
}
