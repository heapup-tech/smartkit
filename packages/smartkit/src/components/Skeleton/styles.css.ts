import { style } from '@vanilla-extract/css'

export const SkeletonStyle = style({
  background: 'rgb(229, 231, 235)',
  width: '100%',
  height: '100%',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: 'rgb(51, 51, 51)'
    }
  }
})
