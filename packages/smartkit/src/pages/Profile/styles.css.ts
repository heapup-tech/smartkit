import { style } from '@vanilla-extract/css'

const profileContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
})
const address = style({
  fontWeight: 600
})

export default {
  profileContent,
  address
}
