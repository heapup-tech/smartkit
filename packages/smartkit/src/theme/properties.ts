import { omit } from 'radash'
import { themeVars } from './themeVars'
import { size } from './tokens'

const space = omit(size, [
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

export const unresponsiveProperties = {
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
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
  borderRadius: {
    none: '0px',
    sm: '2px',
    ...themeVars.radii
  },
  width: {
    full: '100%',
    ...themeVars.width
  },
  maxheight: {
    ...themeVars.maxHeight
  },
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: space,
  marginBottom: space,
  marginRight: space,
  marginLeft: space,
  paddingBlock: space,
  paddingInline: space
} as const
