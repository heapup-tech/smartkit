import { useMutation } from '@tanstack/react-query'
import type {
  StandardConnectInput,
  StandardConnectOutput,
  WalletWithRequiredFeatures
} from '@mysten/wallet-standard'
import { UseMutationParameters } from '../types/utils'

type ConnectParameters = {
  wallet: WalletWithRequiredFeatures
} & StandardConnectInput

type ConnectReturn = StandardConnectOutput

export type UseConnectParameters = {
  mutation?: UseMutationParameters<ConnectReturn, Error, ConnectParameters>
}

export function useConnect(parameters: UseConnectParameters = {}) {
  const { mutation } = parameters

  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['connect'],
    mutationFn: async ({ wallet, ...connectInput }) => {
      const connectResult = await wallet.features['standard:connect'].connect(
        connectInput
      )
      const connectedAccounts = connectResult.accounts.filter((account) =>
        account.chains.some((chain) => chain.split(':')[0] === 'sui')
      )

      console.log(connectedAccounts)

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
