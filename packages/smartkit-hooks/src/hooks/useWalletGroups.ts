import { useConfig } from './useConfig'

export function useWalletGroups() {
  const { walletGroups } = useConfig()
  return walletGroups || []
}
