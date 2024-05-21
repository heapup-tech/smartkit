import { createStore } from 'zustand'
import { Address } from './types/account'
import {
  WalletAccount,
  WalletWithRequiredFeatures
} from '@mysten/wallet-standard'
import { State } from './createConfig'

export const createConnectStore = () => {
  return createStore<State>()((set) => {
    return {
      accounts: [],
      currentAccount: null,
      currentWallet: null,
      recentAccountAddress: null,
      recentConnectorId: '',
      status: 'disconnected',
      onConnected: (
        wallet: WalletWithRequiredFeatures,
        accounts: WalletAccount[]
      ) => {
        set(() => {
          return {
            accounts,
            currentAccount: accounts[0],
            currentWallet: wallet,
            recentAccountAddress: accounts[0].address as Address,
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
            recentAccountAddress: account.address as Address
          }
        })
      }
    }
  })
}
