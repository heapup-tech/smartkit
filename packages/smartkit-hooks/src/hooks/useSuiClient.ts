import { useSmartKitClientContext } from '../SmartKitClientProvider'

export function useSuiClient() {
  const { suiClient } = useSmartKitClientContext()

  return suiClient
}
