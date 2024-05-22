import { useMutation } from '@tanstack/react-query'
import { useConnectStore } from './useConnectStore'
import { UseMutationParameters } from '../types/utils'

type DisconnectReturn = void

type UseDisConnectParameters = {
  mutation?: UseMutationParameters<DisconnectReturn, Error>
}

export function useDisconnect(parameters: UseDisConnectParameters = {}) {
  const { mutation } = parameters

  const currentWallet = useConnectStore((state) => state.currentWallet)
  const onDisConnected = useConnectStore((state) => state.onDisConnected)

  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['disconnect'],
    mutationFn: async () => {
      currentWallet &&
        currentWallet.features['standard:disconnect']?.disconnect()
      onDisConnected()
    }
  })

  return {
    ...result,
    disconnectAsync: mutateAsync,
    disconnect: mutate
  }
}
