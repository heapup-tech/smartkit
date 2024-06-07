import { createStore } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Address } from './types/account'
import {
  WalletAccount,
  WalletWithRequiredFeatures
} from '@mysten/wallet-standard'
import { State, WalletGroup } from './createConfig'

export const createConnectStore = (walletGroups: WalletGroup[]) => {
  return createStore<State>()(
    persist(
      (set, get) => {
        return {
          walletGroups: walletGroups,
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
                status: accounts.length === 0 ? 'disconnected' : 'connected'
              }
            })
          },
          onDisConnected: () => {
            set(() => {
              return {
                accounts: [],
                currentAccount: null,
                currentWallet: null,
                recentConnectAddress: null,
                recentConnectorId: null,
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
          },
          onChangedAccounts: (
            accounts: WalletAccount[],
            account: WalletAccount | null
          ) => {
            set(() => {
              return {
                accounts,
                currentAccount: account,
                recentConnectAddress: account
                  ? (account.address as Address)
                  : null,
                status: accounts.length === 0 ? 'disconnected' : 'connected'
              }
            })
          },
          onChangedStatus: (status) => {
            set(() => ({ status }))
          },
          onWalletRegistered: (walletGroups) => {
            set(() => ({ walletGroups }))
          },
          onWalletUnregistered: (walletGroups, unregisteredWallet) => {
            const currentWallet = get().currentWallet
            if (currentWallet && currentWallet === unregisteredWallet) {
              set(() => {
                return {
                  walletGroups,
                  currentWallet: null,
                  currentAccount: null,
                  accounts: [],
                  recentConnectAddress: null,
                  recentConnectorId: null,
                  status: 'disconnected'
                }
              })
            } else {
              set(() => ({ walletGroups }))
            }
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
