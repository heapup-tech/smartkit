import type {
  MinimallyRequiredFeatures,
  Wallet,
  WalletWithFeatures
} from '@mysten/wallet-standard'
import {
  getWallets,
  isWalletWithRequiredFeatureSet
} from '@mysten/wallet-standard'
import { useMutation } from '@tanstack/react-query'
import { UseMutationParameters } from '../utils/type'

export type UseConnectParameters = {
  mutation?: UseMutationParameters
}

export function getRegisteredWallets<
  AdditionalFeatures extends Wallet['features']
>(preferredWallets: string[], requiredFeatures?: (keyof AdditionalFeatures)[]) {
  const walletsApi = getWallets()
  const wallets = walletsApi.get()

  const suiWallets = wallets.filter(
    (
      wallet
    ): wallet is WalletWithFeatures<
      MinimallyRequiredFeatures & AdditionalFeatures
    > => isWalletWithRequiredFeatureSet(wallet, requiredFeatures)
  )

  return [
    // Preferred wallets, in order:
    ...(preferredWallets
      .map((name) => suiWallets.find((wallet) => wallet.name === name))
      .filter(Boolean) as WalletWithFeatures<
      MinimallyRequiredFeatures & AdditionalFeatures
    >[]),

    // Wallets in default order:
    ...suiWallets.filter((wallet) => !preferredWallets.includes(wallet.name))
  ]
}

export function useConnect(parameters: UseConnectParameters = {}) {
  const { mutation } = parameters

  const lists = getRegisteredWallets(
    ['Sui Wallet', 'Stashed'],
    ['sui:signTransactionBlock']
  )
  console.log('lists:')
  console.log(lists)

  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['connect'],
    mutationFn: async () => {
      const connectResult = await lists[0].features['standard:connect'].connect(
        {
          silent: false
        }
      )
      // console.log(connectResult)

      const connectedSuiAccounts = connectResult.accounts.filter((account) =>
        account.chains.some((chain) => chain.split(':')[0] === 'sui')
      )

      return connectedSuiAccounts[0]
      // const selectedAccount = getSelectedAccount(connectedSuiAccounts, accountAddress);

      // await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  })

  return {
    ...result,
    connect: mutate,
    connectAsync: mutateAsync
  }
}

// useConnect()
