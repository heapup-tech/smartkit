import { getWallets, WalletAccount } from '@mysten/wallet-standard'
import { useConnectStore } from './useConnectStore'
import { getWalletGroups } from '../utils/wallet'
import { useEffect } from 'react'
import { useConfig } from './useConfig'

export const useWatchWallet = () => {
  const currentWallet = useConnectStore((state) => state.currentWallet)
  const currentAccount = useConnectStore((state) => state.currentAccount)
  const onChangedAccounts = useConnectStore((state) => state.onChangedAccounts)
  const config = useConfig()

  const onWalletRegistered = useConnectStore(
    (state) => state.onWalletRegistered
  )
  const onWalletUnRegistered = useConnectStore(
    (state) => state.onWalletUnregistered
  )

  useEffect(() => {
    const walletsApi = getWallets()

    const unsubscribeRegister = walletsApi.on('register', () => {
      onWalletRegistered(getWalletGroups(config.wallets))
    })
    const unsubscribeUnRegister = walletsApi.on(
      'unregister',
      (unregisteredWallet) => {
        onWalletUnRegistered(
          getWalletGroups(config.wallets),
          unregisteredWallet
        )
      }
    )

    const unsubscribeChangeEvent = currentWallet?.features[
      'standard:events'
    ].on('change', ({ accounts }) => {
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
    })

    return () => {
      unsubscribeRegister()
      unsubscribeUnRegister()
      unsubscribeChangeEvent && unsubscribeChangeEvent()
    }
  }, [
    currentWallet,
    currentAccount,
    onChangedAccounts,
    config.wallets,
    onWalletRegistered,
    onWalletUnRegistered
  ])
}
