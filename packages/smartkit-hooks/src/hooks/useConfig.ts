import { useSmartKitClientContext } from '../SmartKitClientProvider'

export function useConfig() {
  const { config } = useSmartKitClientContext()

  return config
}
