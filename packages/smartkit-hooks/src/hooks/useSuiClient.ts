import { useConfig } from './useConfig'

export function useSuiClient() {
  return useConfig().suiClient
}
