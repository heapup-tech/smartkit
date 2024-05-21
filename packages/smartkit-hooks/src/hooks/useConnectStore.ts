import { useStore } from 'zustand'
import { State } from '../createConfig'
import { useSmartKitClientContext } from '../SmartKitClientProvider'

export function useConnectStore<T>(selector: (state: State) => T): T {
  const config = useSmartKitClientContext()
  return useStore(config.store, selector)
}
