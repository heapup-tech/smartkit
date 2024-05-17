import { useConfig } from './useConfig'

export function useSuiClient() {
  const config = useConfig()
  return config.suiClient
}
