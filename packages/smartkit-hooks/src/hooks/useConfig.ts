import { useSmartKitClientContext } from '../SmartKitClientProvider'

export function useConfig() {
  return useSmartKitClientContext()
}
