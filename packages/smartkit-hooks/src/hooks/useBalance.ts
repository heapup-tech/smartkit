import { useQuery } from '@tanstack/react-query'
import { useAccount } from './useAccount'
import { useSuiClient } from './useSuiClient'

export function useBalance() {
  const suiClient = useSuiClient()
  const { address } = useAccount()

  return useQuery({
    queryKey: ['getBalance'],
    queryFn: () => {
      return suiClient.getBalance({
        owner: address
      })
    }
  })
}
