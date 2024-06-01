import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'
import { calc } from '@vanilla-extract/css-utils'

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

const pageHeaderTitle = style({
  fontSize: '18px',
  fontWeight: 500,
  flex: 1,
  textAlign: 'center',
  position: 'relative'
})

const pageHeaderIcon = style({
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  padding: 0,
  background: 'transparent',
  color: '#999999'
})

const pageContent = style({
  overflow: 'auto',
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
