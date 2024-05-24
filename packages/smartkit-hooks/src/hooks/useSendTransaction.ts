import { useMutation } from '@tanstack/react-query'
import { useConnectStore } from './useConnectStore'
import { UseMutationParameters } from '../types/utils'
import {
  SuiSignAndExecuteTransactionBlockInput,
  SuiSignAndExecuteTransactionBlockOutput
} from '@mysten/wallet-standard'

type SendTransactionParameters = Omit<
  SuiSignAndExecuteTransactionBlockInput,
  'account' | 'chain'
>

type SendTransactionReturn = SuiSignAndExecuteTransactionBlockOutput

type UseSendTransactionParameters = {
  mutation?: UseMutationParameters<
    SendTransactionReturn | undefined,
    Error,
    SendTransactionParameters
  >
}

export function useSendTransaction(
  parameters: UseSendTransactionParameters = {}
) {
  const { mutation } = parameters
  const currentWallet = useConnectStore((state) => state.currentWallet)
  const currentAccount = useConnectStore((state) => state.currentAccount)

  const { mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['sendTransaction'],
    mutationFn: async ({ requestType, options, ...args }) => {
      if (!currentAccount || !currentWallet) {
        throw new Error('No account connected.')
      }
      const walletFeature =
        currentWallet.features['sui:signAndExecuteTransactionBlock']

      if (walletFeature) {
        return await walletFeature.signAndExecuteTransactionBlock({
          ...args,
          account: currentAccount,
          chain: currentWallet.chains[0],
          requestType,
          options
        })
      }

      throw new Error(
        `${currentWallet.name} does not support the sui:signAndExecuteTransactionBlock feature.`
      )
    }
  })

  return {
    ...result,
    sendTransaction: mutateAsync
  }
}
