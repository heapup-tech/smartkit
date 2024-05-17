import type {
  MinimallyRequiredFeatures,
  Wallet,
  WalletWithFeatures
} from '@mysten/wallet-standard'
import {
  getWallets,
  isWalletWithRequiredFeatureSet
} from '@mysten/wallet-standard'

export function getInstalledWallets<
  AdditionalFeatures extends Wallet['features']
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
  AdditionalFeatures extends Wallet['features']
>(requiredFeatures: (keyof AdditionalFeatures)[] = []) {
  const walletsApi = getWallets()
  const allInstalledWallets = walletsApi.get()

  return allInstalledWallets.filter((wallet) =>
    isWalletWithRequiredFeatureSet(wallet, requiredFeatures)
  )
}
