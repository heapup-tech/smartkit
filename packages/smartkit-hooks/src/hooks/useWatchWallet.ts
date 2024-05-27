import { WalletAccount } from '@mysten/wallet-standard'
import { useConnectStore } from './useConnectStore'

export const useWatchWallet = () => {
  const currentWallet = useConnectStore((state) => state.currentWallet)
  const currentAccount = useConnectStore((state) => state.currentAccount)
  const onChangedAccounts = useConnectStore((state) => state.onChangedAccounts)

  return currentWallet?.features['standard:events'].on(
    'change',
    ({ accounts }) => {
      console.log(accounts)

      if (accounts) {
        if (
          accounts.find(
            (account) => account.address === currentAccount?.address
          )
        ) {
          onChangedAccounts(
            accounts as WalletAccount[],
            currentAccount || accounts[0]
          )
        } else onChangedAccounts(accounts as WalletAccount[], accounts[0])
      } else {
        onChangedAccounts([], null)
      }
    }
  )
}
