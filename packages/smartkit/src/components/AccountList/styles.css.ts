import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../theme/sprinkles.css'
import { themeVars } from '../../theme/themeVars'

const indicator = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingInline: '1',
    paddingBlock: '1',
    borderRadius: 'full',
    columnGap: '2'
  }),
  {
    boxShadow: '0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0,0,0,0.1)',
    background: themeVars.clickable.background.normal,
    ':hover': {
      background: themeVars.clickable.background.hover
    }
  }
])

export default {
  indicator
}
