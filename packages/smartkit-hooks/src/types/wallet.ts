import { WalletWithRequiredFeatures } from '@mysten/wallet-standard'

export type UninstalledWallet = {
  name: string
  icon: string
  downloadUrl?: string
}

export type InstalledWallet = WalletWithRequiredFeatures

export type Wallet = UninstalledWallet | InstalledWallet
