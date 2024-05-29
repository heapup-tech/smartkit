const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

export const truncateAddress = (
  address?: string,
  separator: string = '···'
) => {
  if (!address) return ''
  const match = address.match(truncateRegex)
  if (!match) return address
  return `${match[1]}${separator}${match[2]}`
}

export function formatUnits(
  amount: bigint,
  decimals: number,
  truncate?: boolean,
  truncateLength: number = 2
) {
  let amountStr = amount.toString().padStart(decimals, '0')

  const integer = amountStr.slice(0, amountStr.length - decimals)
  let fraction = amountStr.slice(amountStr.length - decimals)

  if (truncate) {
    if (fraction.length > truncateLength)
      fraction = fraction.slice(0, truncateLength)
    else fraction = fraction.padEnd(truncateLength, '0')
  }
  return `${integer || '0'}${fraction ? `.${fraction}` : ''}`
}

export function parseUnits(amount: string, decimals: number) {
  const [integer, fraction] = amount.split('.')
  let amountStr = integer + (fraction ? fraction : '').padEnd(decimals, '0')
  return BigInt(amountStr)
}

export const formatSui = (amount: bigint) => {
  return formatUnits(amount, 9, true)
}

export const parseSui = (amount: string) => {
  return parseUnits(amount, 9)
}
