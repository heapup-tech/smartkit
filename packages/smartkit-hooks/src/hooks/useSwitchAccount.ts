import { useMutation } from '@tanstack/react-query'
import { useConnectStore } from './useConnectStore'
import { WalletAccount } from '@mysten/wallet-standard'
import { UseMutationParameters } from '../types/utils'

type SwitchAccountParameters = WalletAccount

type SwitchAccountReturn = void

type UseSwitchAccountParameters = {
  mutation?: UseMutationParameters<
    SwitchAccountReturn | undefined,
    Error,
    SwitchAccountParameters
  >
}
export function useSwitchAccount(parameters: UseSwitchAccountParameters = {}) {
  const { mutation } = parameters
  const currentAccount = useConnectStore((state) => state.currentAccount)
  const accounts = useConnectStore((state) => state.accounts)
  const onSwitchedAccount = useConnectStore((state) => state.onSwitchedAccount)

  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    mutationKey: ['swicth-account'],
    mutationFn: async (account) => {
      if (account.address === currentAccount?.address) {
        return
      }
      if (!accounts.find((a) => a.address === account.address)) {
        throw new Error(`Account ${account.address} not found.`)
      }

      onSwitchedAccount(account)
    }
  })

  return {
    ...result,
    switchAccount: mutate,
    switchAccountAsync: mutateAsync
  }
}
