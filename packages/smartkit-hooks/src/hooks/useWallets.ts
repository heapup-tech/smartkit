import { useConfig } from './useConfig'

export function useWallets() {
  const { wallets } = useConfig()
  return wallets
}
