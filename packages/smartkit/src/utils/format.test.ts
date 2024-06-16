import { expect, it, describe } from 'vitest'
import { formatSui, formatUnits, parseSui, parseUnits } from './format'

describe('test coin amount format', () => {
  it('formatUnits', () => {
    const amount = 1000000n

    expect(formatUnits(amount, 3, false)).toBe('1000.000')
    expect(formatUnits(amount, 3, true)).toBe('1000.00')

    expect(formatUnits(amount, 8, false)).toBe('0.01000000')
    expect(formatUnits(amount, 8, true)).toBe('0.01')

    expect(formatUnits(amount, 9, false, 3)).toBe('0.001000000')
    expect(formatUnits(amount, 9, true, 3)).toBe('0.001')
  })
  it('parseUnits', () => {
    expect(parseUnits('1000.000', 3)).toBe(1000000n)

    expect(parseUnits('0.01', 8)).toBe(1000000n)
  })

  it('formatSui', () => {
    expect(formatSui(1000000n)).toBe('0.00')

    expect(formatSui(10000000n)).toBe('0.01')
  })

  it('parseSui', () => {
    expect(parseSui('0.01')).toBe(10000000n)

    expect(parseSui('0.00')).toBe(0n)
  })
})
