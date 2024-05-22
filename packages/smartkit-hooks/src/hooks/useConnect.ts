import { useMutation } from '@tanstack/react-query'
import type {
  StandardConnectInput,
  StandardConnectOutput,
  WalletWithRequiredFeatures
} from '@mysten/wallet-standard'
import { UseMutationParameters } from '../types/utils'
import { useConnectStore } from './useConnectStore'
import { Address } from '../types/account'

type ConnectParameters = {
  wallet: WalletWithRequiredFeatures
  accountAddress?: Address
} & StandardConnectInput

type ConnectReturn = StandardConnectOutput

export type UseConnectParameters = {
  mutation?: UseMutationParameters<ConnectReturn, Error, ConnectParameters>
}

export function useConnect(parameters: UseConnectParameters = {}) {
  const { mutation } = parameters

  const onConnected = useConnectStore((state) => state.onConnected)

  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['connect'],
    mutationFn: async ({ wallet, accountAddress, ...connectInput }) => {
      const connectResult = await wallet.features['standard:connect'].connect(
        connectInput
      )
      const connectedAccounts = connectResult.accounts.filter((account) =>
        account.chains.some((chain) => chain.split(':')[0] === 'sui')
      )

      let connectedAccount = connectedAccounts.find(
        (account) => account.address === accountAddress
      )

      if (!connectedAccount && connectedAccounts.length) {
        connectedAccount = connectedAccounts[0]
      }

      onConnected(wallet, connectedAccounts, connectedAccount ?? null)

      return {
        accounts: connectedAccounts
      }
    }
  })

  return {
    ...result,
    connect: mutate,
    connectAsync: mutateAsync
  }
}
