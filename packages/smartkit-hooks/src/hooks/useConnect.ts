import type {
  MinimallyRequiredFeatures,
  WalletWithFeatures
} from '@mysten/wallet-standard'
import {
  getWallets,
  isWalletWithRequiredFeatureSet
} from '@mysten/wallet-standard'

export function useConnect() {
  const walletsApi = getWallets()
  const wallets = walletsApi.get()
  const suiWallets = wallets.filter(
    (wallet): wallet is WalletWithFeatures<MinimallyRequiredFeatures> =>
      isWalletWithRequiredFeatureSet(wallet, ['sui:signTransactionBlock'])
  )
  console.log(suiWallets)

  return {
    connect: () => {
      console.log(suiWallets)
    },
    disconnect: () => {
      console.log('disconnect')
    }
  }
}
