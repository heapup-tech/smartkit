import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const pageHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const pageHeaderTitle = style({
  fontSize: themeVars.fontSizes.title,
  fontWeight: 600
})

export default {
  pageHeader,
  pageHeaderTitle
}
