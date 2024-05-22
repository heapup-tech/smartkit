import { createStore } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Address } from './types/account'
import {
  WalletAccount,
  WalletWithRequiredFeatures
} from '@mysten/wallet-standard'
import { State } from './createConfig'

export const createConnectStore = () => {
  return createStore<State>()(
    persist(
      (set) => {
        return {
          accounts: [],
          currentAccount: null,
          currentWallet: null,
          recentConnectAddress: null,
          recentConnectorId: null,
          status: 'disconnected',
          onConnected: (
            wallet: WalletWithRequiredFeatures,
            accounts: WalletAccount[],
            account: WalletAccount | null
          ) => {
            set(() => {
              return {
                accounts,
                currentAccount: account,
                currentWallet: wallet,
                recentConnectAddress: account?.address as Address,
                recentConnectorId: wallet.name,
                status: 'connected'
              }
            })
          },
          onDisConnected: () => {
            set(() => {
              return {
                accounts: [],
                currentAccount: null,
                currentWallet: null,
                status: 'disconnected'
              }
            })
          },
          onSwitchedAccount: (account: WalletAccount) => {
            set(() => {
              return {
                currentAccount: account,
                recentConnectAddress: account.address as Address
              }
            })
          }
        }
      },
      {
        name: 'smartkit-connect-store',
        storage: createJSONStorage(() => window.localStorage),
        partialize: ({ recentConnectorId, recentConnectAddress }) => {
          return {
            recentConnectorId,
            recentConnectAddress
          }
        }
      }
    )
  )
}
