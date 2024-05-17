import { SuiClient } from '@mysten/sui.js/client'
import { Evaluate } from './types/utils'
import { suiWallet } from './wallets/suiWallet'
import { Wallet } from './types/wallet'
import { okxWallet } from './wallets/okxWallet'
import { getInstalledWallets } from './utils/wallet'

export type WalletGroup = {
  groupName: string
  wallets: Wallet[]
}

export const DEAFULT_WALLETS: Wallet[] = [suiWallet, okxWallet]

export type Config = Evaluate<{
  suiClient: SuiClient
  wallets?: Array<WalletGroup> | Array<Wallet>
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

export function createConfig(config: Config) {
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
    }
  })

  walletGroups = walletGroups.filter(
    (walletGroup) => walletGroup.wallets.length > 0
  )

  return {
    suiClient,
    walletGroups: walletGroups,
    wallets: walletGroups.reduce<Wallet[]>((acc, walletGroup) => {
      acc.push(...walletGroup.wallets)
      return acc
    }, [])
  }
}
