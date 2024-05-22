import { SuiClient } from '@mysten/sui.js/client'
import { Evaluate } from './types/utils'
import { suiWallet } from './wallets/suiWallet'
import { Wallet } from './types/wallet'
import { getInstalledWallets } from './utils/wallet'
import { createStore, StoreApi } from 'zustand'
import {
  WalletAccount,
  WalletWithRequiredFeatures
} from '@mysten/wallet-standard'
import { Address } from './types/account'
import { createConnectStore } from './createConnectStore'

export type WalletAction = {
  onConnected: (
    wallet: WalletWithRequiredFeatures,
    accounts: WalletAccount[],
    account: WalletAccount | null
  ) => void
  onDisConnected: () => void
  onSwitchedAccount: (account: WalletAccount) => void
}

export type State = {
  accounts: WalletAccount[]
  currentAccount: WalletAccount | null
  currentWallet: WalletWithRequiredFeatures | null
  recentConnectAddress: Address | null
  recentConnectorId: string | null
  status: 'connected' | 'connecting' | 'disconnected' | 'reconnecting'
} & WalletAction

export type WalletGroup = {
  groupName: string
  wallets: Wallet[]
}

const DEAFULT_WALLETS: Wallet[] = [suiWallet]

export type Config = Evaluate<{
  suiClient: SuiClient
  storage?: Storage
  wallets?: Array<WalletGroup | Wallet>
  walletGroups?: WalletGroup[]
  store: StoreApi<State>
}>

export function excludeInOtherWalletGroup(
  walletGroups: WalletGroup[],
  wallets: Wallet[]
) {
  const includeInWalletSet = new Set<string>()
  walletGroups.forEach((walletGroup) => {
    walletGroup.wallets.forEach((wallet) => {
      includeInWalletSet.add(wallet.name)
    })
  })

  return wallets.filter((wallet) => !includeInWalletSet.has(wallet.name))
}

type createConfigParams = Omit<Config, 'walletGroups' | 'store'>

export function createConfig(config: createConfigParams): Config {
  const { suiClient, wallets = [] } = config

  let wishWallets: Array<WalletGroup | Wallet> = wallets
  if (wallets.length === 0) {
    wishWallets = DEAFULT_WALLETS
  }

  const installedWallet = getInstalledWallets()

  let walletGroups: WalletGroup[] = [
    {
      groupName: 'Installed',
      wallets: installedWallet
    }
  ]

  let groupNameSet = new Set(
    walletGroups.map((walletGroup) => walletGroup.groupName)
  )

  wishWallets.forEach((walletOrGroup) => {
    if ('groupName' in walletOrGroup) {
      walletGroups.forEach((walletGroup) => {
        if (groupNameSet.has(walletOrGroup.groupName)) {
          walletGroup.wallets = walletGroup.wallets.concat(
            excludeInOtherWalletGroup(walletGroups, walletOrGroup.wallets)
          )
        } else {
          walletGroups.push({
            groupName: walletOrGroup.groupName,
            wallets: excludeInOtherWalletGroup(
              walletGroups,
              walletOrGroup.wallets
            )
          })
          groupNameSet = new Set(
            walletGroups.map((walletGroup) => walletGroup.groupName)
          )
        }
      })
    } else {
      walletGroups.push({
        groupName: 'Popular',
        wallets: excludeInOtherWalletGroup(walletGroups, [walletOrGroup])
      })
    }
  })

  walletGroups = walletGroups.filter(
    (walletGroup) => walletGroup.wallets.length > 0
  )

  createStore

  return {
    suiClient,
    walletGroups: walletGroups,
    wallets: walletGroups.reduce<Wallet[]>((acc, walletGroup) => {
      acc.push(...walletGroup.wallets)
      return acc
    }, []),
    store: createConnectStore()
  }
}
