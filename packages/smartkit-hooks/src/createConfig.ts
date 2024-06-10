import { SuiClient } from '@mysten/sui.js/client'
import { Evaluate } from './types/utils'
import { Wallet } from './types/wallet'
import { StoreApi } from 'zustand'
import {
  Wallet as StandardWallet,
  WalletAccount,
  WalletWithRequiredFeatures
} from '@mysten/wallet-standard'
import { Address } from './types/account'
import { createConnectStore } from './createConnectStore'
import { getWalletGroups } from './utils/wallet'

export type ConnectStatus = 'connected' | 'connecting' | 'disconnected'

export type ConnectActions = {
  onConnected: (
    wallet: WalletWithRequiredFeatures,
    accounts: WalletAccount[],
    account: WalletAccount | null
  ) => void
  onDisConnected: () => void
  onSwitchedAccount: (account: WalletAccount) => void
  onChangedAccounts: (
    accounts: WalletAccount[],
    account: WalletAccount | null
  ) => void
  onChangedStatus: (status: ConnectStatus) => void
  onWalletRegistered: (walletGroups: WalletGroup[]) => void
  onWalletUnregistered: (
    walletGroups: WalletGroup[],
    unregisteredWallet: StandardWallet
  ) => void
}

export type State = {
  walletGroups: WalletGroup[]
  accounts: WalletAccount[]
  currentAccount: WalletAccount | null
  currentWallet: WalletWithRequiredFeatures | null
  recentConnectAddress: Address | null
  recentConnectorId: string | null
  status: ConnectStatus
} & ConnectActions

export type WalletGroup = {
  groupName: string
  wallets: Wallet[]
}

export type Config = Evaluate<{
  suiClient: SuiClient
  storage?: Storage
  wallets?: Array<WalletGroup | Wallet>
  store: StoreApi<State>
}>

type CreateConfigParams = Omit<Config, 'walletGroups' | 'store'>

export function createConfig(config: CreateConfigParams): Config {
  const { suiClient, wallets = [] } = config

  const walletGroups = getWalletGroups(wallets)

  return {
    suiClient,
    wallets,
    store: createConnectStore(walletGroups)
  }
}
