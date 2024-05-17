import { getInstalledWallets } from '@heapup/smartkit-hooks'
import { Wallet } from './types'

type GroupWallet = {
  name: string
  wallets: Wallet[]
}
export const groupWallets = (groupWallets: GroupWallet[]) => {
  return [
    {
      name: 'Installed',
      wallets: getInstalledWallets()
    },
    ...groupWallets.map((group) => ({
      name: group.name,
      wallets: group.wallets
    }))
  ]
}
