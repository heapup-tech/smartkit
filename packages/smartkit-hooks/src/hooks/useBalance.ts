import { useQuery } from '@tanstack/react-query'
import { useSuiClient } from './useSuiClient'
import { CoinBalance } from '@mysten/sui.js/client'
import { UseQueryParameters } from '../types/utils'

type UseBalanceParameters = {
  query?: UseQueryParameters<CoinBalance, Error>
} & {
  address?: string
  coinType?: string
}

export function useBalance({
  address,
  coinType = '0x2::sui::SUI',
  query = {}
}: UseBalanceParameters) {
  const suiClient = useSuiClient()

  return useQuery({
    ...query,
    queryKey: ['useBalance'],
    queryFn: async () => {
      if (!address) throw new Error('address is required')
      return suiClient.getBalance({
        owner: address,
        coinType
      })
    },
    enabled: Boolean(suiClient && address)
  })
}
