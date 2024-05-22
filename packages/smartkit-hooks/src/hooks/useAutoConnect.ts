import { getInstalledWallets } from '../utils/wallet'
import { useConnect } from './useConnect'
import { useConnectStore } from './useConnectStore'
import { useQuery } from '@tanstack/react-query'

export function useAutoConnect() {
  const { connectAsync } = useConnect()

  const recentConnectorId = useConnectStore((state) => state.recentConnectorId)

  const recentConnectAddress = useConnectStore(
    (state) => state.recentConnectAddress
  )

  return useQuery({
    queryKey: ['auto-connect'],
    queryFn: async () => {
      if (recentConnectorId) {
        const installedWallet = getInstalledWallets()
        const wallet = installedWallet.find(
          (wallet) => wallet.name === recentConnectorId
        )
        wallet &&
          connectAsync({
            wallet,
            accountAddress: recentConnectAddress,
            silent: true
          })
      }

      return null
    }
  })
}
