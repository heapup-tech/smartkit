import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const pageContainer = style({
  position: 'relative'
})

const page = style({
  position: 'absolute',
  top: 0,
  width: '100%'
})
const pageHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const pageHeaderTitle = style({
  fontSize: themeVars.fontSizes.title,
  fontWeight: 500
})

export default {
  page,
  pageContainer,
  pageHeader,
  pageHeaderTitle
}
