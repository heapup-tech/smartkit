import type {
  MinimallyRequiredFeatures,
  Wallet as StandardWallet,
  WalletWithFeatures
} from '@mysten/wallet-standard'
import {
  getWallets,
  isWalletWithRequiredFeatureSet
} from '@mysten/wallet-standard'
import { Wallet } from '../types/wallet'
import { WalletGroup } from '../createConfig'
import { suiWallet } from '../wallets/suiWallet'

const DEAFULT_WALLETS: Wallet[] = [suiWallet]

export function getInstalledWallets<
  AdditionalFeatures extends StandardWallet['features']
>(
  preferredWallets: string[] = [],
  requiredFeatures: (keyof AdditionalFeatures)[] = ['sui:signTransactionBlock']
) {
  const suiInstalledWallets = getInstalledFeaturesWallets(requiredFeatures)

  return [
    ...(preferredWallets.map((name) =>
      suiInstalledWallets.find((wallet) => wallet.name === name)
    ) as WalletWithFeatures<MinimallyRequiredFeatures & AdditionalFeatures>[]),
    ...suiInstalledWallets.filter(
      (wallet) => !preferredWallets.includes(wallet.name)
    )
  ]
}

export function getInstalledFeaturesWallets<
  AdditionalFeatures extends StandardWallet['features']
>(requiredFeatures: (keyof AdditionalFeatures)[] = []) {
  const walletsApi = getWallets()
  const allInstalledWallets = walletsApi.get()

  return allInstalledWallets.filter((wallet) =>
    isWalletWithRequiredFeatureSet(wallet, requiredFeatures)
  )
}

export function getWalletGroups(
  perferredWallets: Array<WalletGroup | Wallet> = []
) {
  let wishWallets: Array<WalletGroup | Wallet> = perferredWallets
  if (perferredWallets.length === 0) {
    wishWallets = DEAFULT_WALLETS
  }

  const installedWallets = getInstalledWallets()

  let walletGroups: WalletGroup[] = [
    {
      groupName: 'Installed',
      wallets: installedWallets
    }
  ]

  wishWallets.forEach((walletOrGroup) => {
    if ('groupName' in walletOrGroup) {
      const walletGroup = walletGroups.find(
        (walletGroup) => walletGroup.groupName === walletOrGroup.groupName
      )
      if (walletGroup) {
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
      }
    } else {
      const polularGroup = walletGroups.find(
        (walletGroup) => walletGroup.groupName === 'Popular'
      )
      if (polularGroup) {
        polularGroup.wallets = polularGroup.wallets.concat(
          excludeInOtherWalletGroup(walletGroups, [walletOrGroup])
        )
      } else {
        walletGroups.push({
          groupName: 'Popular',
          wallets: excludeInOtherWalletGroup(walletGroups, [walletOrGroup])
        })
      }
    }
  })

  return walletGroups.filter((walletGroup) => walletGroup.wallets.length > 0)
}

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
