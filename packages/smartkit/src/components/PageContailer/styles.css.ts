import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { calc } from '@vanilla-extract/css-utils'
import { sprinkles } from '../../theme/sprinkles.css'

const pageContainer = style({
  display: 'flex',
  flexDirection: 'column'
})

const page = style({})

const pageHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px'
})

const pageHeaderTitle = style([
  sprinkles({
    fontSize: ['3', '4'],
    fontWeight: ['medium', 'semibold']
  }),
  {
    flex: 1,
    textAlign: 'center',
    position: 'relative'
  }
])

const pageHeaderIcon = style([
  sprinkles({
    borderRadius: 'full',
    width: '8',
    height: '8'
  }),
  {
    padding: 0,
    background: 'transparent',
    color: '#999999'
  }
])

const pageContent = style({
  overflow: 'hidden',
  flex: 1,
  maxHeight: calc.subtract(themeVars.maxHeight.connectModal, '100px'),
  '::-webkit-scrollbar': {
    display: 'none'
  }
})

export default {
  page,
  pageContainer,
  pageHeader,
  pageHeaderTitle,
  pageHeaderIcon,
  pageContent
}
