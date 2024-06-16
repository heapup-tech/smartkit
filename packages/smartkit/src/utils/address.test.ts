import { expect, test } from 'vitest'
import { truncateAddress } from './address'

test('truncateAddress', () => {
  expect(truncateAddress('0x1234567890abcdef1234567890abcdef12345678')).toBe(
    '0x1234···5678'
  )

  expect(
    truncateAddress('0x1234567890abcdef1234567890abcdef12345678', '...')
  ).toBe('0x1234...5678')

  expect(truncateAddress('')).toBe('')

  expect(truncateAddress(undefined)).toBe('')

  expect(truncateAddress('0x112')).toBe('0x112')
})
