import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { sprinkles } from '../../theme/sprinkles.css'
import { calc } from '@vanilla-extract/css-utils'

const connectOptionsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

const connectGroupContainer = style([
  {
    overflow: 'auto',
    flex: 1,
    maxHeight: calc.subtract(themeVars.maxHeight.connectModal, '142px'),

    '::-webkit-scrollbar': {
      display: 'none'
    },
    '@media': {
      'screen and (min-width: 640px)': {
        minHeight: calc.subtract(themeVars.maxHeight.connectModal, '200px')
      }
    }
  }
])

const connectGroup = style({
  margin: '20px 0',
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
    fontWeight: ['medium'],
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
  connectOptionsContainer,
  connectGroupContainer,
  connectGroup,
  connectGroupTitle,
  walletItem,
  walletIcon
}
