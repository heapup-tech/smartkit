import { useMutation } from '@tanstack/react-query'
import { useConnectStore } from './useConnectStore'
import { UseMutationParameters } from '../types/utils'
import {
  SuiSignTransactionBlockInput,
  SuiSignTransactionBlockOutput
} from '@mysten/wallet-standard'

type SignTransactionParameters = Omit<
  SuiSignTransactionBlockInput,
  'account' | 'chain'
>
type SignTransactionReturn = SuiSignTransactionBlockOutput

type UseSignTransactionParameters = {
  mutation?: UseMutationParameters<
    SignTransactionReturn | undefined,
    Error,
    SignTransactionParameters
  >
}

export function useSignTransaction(
  parameters: UseSignTransactionParameters = {}
) {
  const { mutation } = parameters
  const currentWallet = useConnectStore((state) => state.currentWallet)
  const currentAccount = useConnectStore((state) => state.currentAccount)

  const { mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['signTransaction'],
    mutationFn: async (args) => {
      if (!currentAccount || !currentWallet) {
        throw new Error('No account connected.')
      }
      const walletFeature = currentWallet.features['sui:signTransactionBlock']

      if (walletFeature) {
        return await walletFeature.signTransactionBlock({
          ...args,
          account: currentAccount,
          chain: currentWallet.chains[0]
        })
      }

      throw new Error(
        `${currentWallet.name} does not support the sui:signTransactionBlock feature.`
      )
    }
  })

  return {
    ...result,
    signTransaction: mutateAsync
  }
}
