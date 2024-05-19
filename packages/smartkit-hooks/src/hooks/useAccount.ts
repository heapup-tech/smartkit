import { Address } from '../types/account'

export type UseAccountReturn = {
  address: Address
  addresses: Address[]
  chains: string[]
  isConnecting: boolean
  isReconnecting: boolean
  isConnected: boolean
  isDisconnected: boolean
  status: 'connecting' | 'reconnecting' | 'connected' | 'disconnected'
}

export function useAccount() {
  return {
    address: '0x1234567890abcdef1234567890abcdef12345678'
  }
}
