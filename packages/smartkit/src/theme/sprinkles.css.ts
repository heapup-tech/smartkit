import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { breakpointNames, breakpoints } from './breakpoints'
import { themeVars } from './themeVars'
import { pick } from 'radash'
import { fontSizes, fontWeights, sizes } from './tokens'

const space = pick(sizes, [
  '0',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8'
])

const sizeWithWidths = {
  ...sizes,
  full: '100%',
  screen: '100vw',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content'
}

const sizeWithHeights = {
  ...sizes,
  full: '100%',
  screen: '100vh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content'
}

const borderRadius = {
  none: '0px',
  small: '4px',
  standard: '6px',
  large: '8px',
  full: '50%',
  ...themeVars.radii
}

export const unresponsiveProperties = {
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    modal: 9999999
  },
  cursor: ['default', 'pointer'],
  pointerEvents: ['none']
} as const

export const responsiveProperties = {
  all: ['initial', 'inherit', 'unset'],
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex'
  },
  alignItems: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end'
  },
  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between'
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse'
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap'
  },
  flexShrink: [0],
  flexGrow: [0, 1],
  position: ['relative', 'absolute', 'fixed'],
  borderRadius: borderRadius,
  borderTopLeftRadius: borderRadius,
  borderTopRightRadius: borderRadius,
  borderBottomLeftRadius: borderRadius,
  borderBottomRightRadius: borderRadius,
  width: {
    ...sizeWithWidths,
    ...themeVars.width
  },
  maxHeight: {
    ...themeVars.maxHeight
  },
  height: sizeWithHeights,
  lineHeight: sizes,
  fontSize: fontSizes,
  fontWeight: fontWeights,
  columnGap: space,
  rowGap: space,
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: space,
  marginBottom: space,
  marginRight: space,
  marginLeft: space,
  paddingBlock: {
    ...space,
    ...themeVars.paddingBlock
  },
  paddingInline: {
    ...space,
    ...themeVars.paddingInline
  }
} as const

const responsiveSprinkleProperties = defineProperties({
  conditions: {
    small: {},
    large: { '@media': `screen and (min-width: ${breakpoints.large}px)` }
  },
  defaultCondition: 'small',
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
