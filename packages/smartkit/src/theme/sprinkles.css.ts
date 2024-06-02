import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export const desktopMinWidth = 768

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': `(min-width: ${desktopMinWidth}px)` }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'grid'],
    flexDirection: ['row', 'column'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end'],
    padding: ['none', 'small', 'medium', 'large'],
    margin: ['none', 'small', 'medium', 'large'],
    borderRadius: ['none', 'small', 'medium', 'large'],
    boxShadow: ['none', 'small', 'medium', 'large'],
    fontSize: ['small', 'medium', 'large'],
    fontWeight: ['normal', 'bold'],
    lineHeight: ['none', 'small', 'medium', 'large'],
    textAlign: ['left', 'center', 'right'],
    color: ['primary', 'secondary', 'accent', 'neutral'],
    backgroundColor: ['primary', 'secondary', 'accent', 'neutral'],
    border: ['none', 'small', 'medium', 'large'],
    borderColor: ['primary', 'secondary', 'accent', 'neutral'],
    width: ['100%', 'auto'],
    height: ['full', 'auto'],
    bottom: [0]
  }
})

export const sprinkles = createSprinkles(responsiveProperties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
