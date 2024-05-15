import { useSmartKitClientContext } from '../SmartKitClientProvider'

export function useAccounts() {
  const v = useSmartKitClientContext()
  console.log(v.client)

  return {
    address: '0x1234567890abcdef1234567890abcdef12345678',
    addresses: ['0x1234567890abcdef1234567890abcdef12345678']
  }
}
