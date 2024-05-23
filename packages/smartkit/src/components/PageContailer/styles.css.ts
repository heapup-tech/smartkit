import { style } from '@vanilla-extract/css'
import { themeVars } from '../../theme/themeVars'

const pageContainer = style({
  height: '100%',
  position: 'relative'
})

const page = style({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%'
})
const pageHeader = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px'
})

const pageHeaderTitle = style({
  fontSize: themeVars.fontSizes.title,
  fontWeight: 500
})

const pageHeaderIcon = style({
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  padding: 0,
  background: 'transparent',
  color: '#999999'
})

export default {
  page,
  pageContainer,
  pageHeader,
  pageHeaderTitle,
  pageHeaderIcon
}
