import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { responsiveProperties, unresponsiveProperties } from './properties'
import { breakpointNames, breakpoints } from './breakpoints'

const responsiveSprinkleProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}px)` }
  },
  defaultCondition: 'mobile',
  responsiveArray: breakpointNames,
  properties: responsiveProperties
})

const unresponsiveSprinkleProperties = defineProperties({
  properties: unresponsiveProperties
})

export const sprinkles = createSprinkles(
  responsiveSprinkleProperties,
  unresponsiveSprinkleProperties
)
export type Sprinkles = Parameters<typeof sprinkles>[0]
