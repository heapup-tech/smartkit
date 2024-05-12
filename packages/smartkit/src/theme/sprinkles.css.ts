import { defineProperties } from '@vanilla-extract/sprinkles'

defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {}
})
// export const sprinkles = createSprinkles(responsiveProperties, colorProperties)
