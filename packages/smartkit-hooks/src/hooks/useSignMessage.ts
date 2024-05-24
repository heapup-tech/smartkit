import { useMutation } from '@tanstack/react-query'
import { useConnectStore } from './useConnectStore'
import { UseMutationParameters } from '../types/utils'
import { SuiSignPersonalMessageOutput } from '@mysten/wallet-standard'

type SignMessageParameters = {
  message: string
}

type SignMessageReturn = SuiSignPersonalMessageOutput

type UseSignMessageParameters = {
  mutation?: UseMutationParameters<
    SignMessageReturn | undefined,
    Error,
    SignMessageParameters
  >
}

export function useSignMessage(parameters: UseSignMessageParameters = {}) {
  const { mutation } = parameters
  const currentAccount = useConnectStore((state) => state.currentAccount)
  const currentWallet = useConnectStore((state) => state.currentWallet)

  const { mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['signMessage'],
    mutationFn: async ({ message }) => {
      if (!currentAccount || !currentWallet) {
        throw new Error('No account connected.')
      }

      const signPersonalMessageFeature =
        currentWallet.features['sui:signPersonalMessage']
      if (signPersonalMessageFeature) {
        return await signPersonalMessageFeature.signPersonalMessage({
          message: new TextEncoder().encode(message),
          account: currentAccount
        })
      }
      const signMessageFeature = currentWallet.features['sui:signMessage']
      if (signMessageFeature) {
        const { messageBytes: bytes, signature } =
          await signMessageFeature.signMessage({
            message: new TextEncoder().encode(message),
            account: currentAccount
          })

        return { bytes, signature }
      }

      throw new Error(
        `${currentWallet.name} does not support the sui:signPersonalMessage or sui:signMessage feature.`
      )
    }
  })
  return { ...result, signMessage: mutateAsync }
}
