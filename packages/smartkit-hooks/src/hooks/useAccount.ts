import { WalletAccount } from '@mysten/wallet-standard'
import { useConnectStore } from './useConnectStore'

export type UseAccountReturn = {
  account: WalletAccount
  accounts: WalletAccount[]
  isConnected: boolean
  isConnecting: boolean
  isDisconnected: boolean
  isReconnecting: boolean
  status: 'connected' | 'connecting' | 'disconnected' | 'reconnecting'
}

export function useAccount() {
  const accounts = useConnectStore((state) => state.accounts)
  const currentAccount = useConnectStore((state) => state.currentAccount)

  const status = useConnectStore((state) => state.status)
  switch (status) {
    case 'connected':
      return {
        account: currentAccount,
        accounts: accounts,
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
        status
      }
    case 'connecting':
      return {
        account: currentAccount,
        accounts: accounts,
        isConnecting: true,
        isReconnecting: false,
        isConnected: false,
        isDisconnected: false,
        status
      }

    case 'disconnected':
      return {
        account: null,
        accounts: [],
        isConnected: false,
        isConnecting: false,
        isDisconnected: true,
        isReconnecting: false,
        status
      }

    case 'reconnecting':
      return {
        account: currentAccount,
        accounts: accounts,
        isConnected: !!currentAccount,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: true,
        status
      }
  }
}
