import { UninstalledWallet } from '../types/wallet'

export * from './okxWallet'
export * from './suiWallet'
export * from './suietWallet'
export * from './bitgetWallet'

export const createWallet = ({
  name,
  icon,
  downloadUrl
}: UninstalledWallet) => {
  return { name, icon, downloadUrl }
}
