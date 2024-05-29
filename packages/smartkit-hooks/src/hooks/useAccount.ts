import { WalletAccount } from '@mysten/wallet-standard'
import { useConnectStore } from './useConnectStore'
import { ConnectStatus } from '../createConfig'

export type UseAccountReturn = {
  account: WalletAccount
  accounts: WalletAccount[]
  isConnected: boolean
  isConnecting: boolean
  isDisconnected: boolean
  status: ConnectStatus
}

export function useAccount() {
  const accounts = useConnectStore((state) => state.accounts)
  const currentAccount = useConnectStore((state) => state.currentAccount)

  const status = useConnectStore((state) => state.status) || 'disconnected'

  switch (status) {
    case 'connected':
      return {
        account: currentAccount,
        accounts: accounts,
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        status
      }
    case 'connecting':
      return {
        account: currentAccount,
        accounts: accounts,
        isConnecting: true,
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
        status
      }
  }
}
