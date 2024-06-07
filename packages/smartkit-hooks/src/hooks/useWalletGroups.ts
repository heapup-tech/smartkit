import { useConnectStore } from './useConnectStore'

export function useWalletGroups() {
  return useConnectStore((state) => state.walletGroups)
}
