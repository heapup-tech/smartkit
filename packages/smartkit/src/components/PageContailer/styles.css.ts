import { style } from '@vanilla-extract/css'

const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const page = style({})

const pageHeader = style({
  width: '100%',
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
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export default {
  page,
  pageContainer,
  pageHeader,
  pageHeaderTitle,
  pageHeaderIcon,
  pageContent
}
