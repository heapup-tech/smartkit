import { Address } from '../types/account'
import { useConnectStore } from './useConnectStore'

export type UseAccountReturn = {
  address: Address
  addresses: Address[]
  isConnected: boolean
  isConnecting: boolean
  isDisconnected: boolean
  isReconnecting: boolean
  status: 'connected' | 'connecting' | 'disconnected' | 'reconnecting'
}

export function useAccount() {
  const accounts = useConnectStore((state) => state.accounts)
  const addresses = accounts.map((account) => account.address as Address)
  const address = addresses?.[0]

  const status = useConnectStore((state) => state.status)
  switch (status) {
    case 'connected':
      return {
        address: accounts[0].address,
        addresses: accounts.map((account) => account.address),
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
        status
      }
    case 'connecting':
      return {
        address: '',
        addresses: [],
        isConnecting: true,
        isReconnecting: false,
        isConnected: false,
        isDisconnected: false,
        status
      }

    case 'disconnected':
      return {
        address: undefined,
        addresses: undefined,
        isConnected: false,
        isConnecting: false,
        isDisconnected: true,
        isReconnecting: false,
        status
      }

    case 'reconnecting':
      return {
        address: undefined,
        addresses: undefined,
        isConnected: !!address,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: true,
        status
      }
  }
}
