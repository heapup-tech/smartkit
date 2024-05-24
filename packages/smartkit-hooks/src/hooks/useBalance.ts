import { useQuery } from '@tanstack/react-query'
import { useSuiClient } from './useSuiClient'
import { CoinBalance, GetBalanceParams } from '@mysten/sui.js/client'
import { UseQueryParameters } from '../types/utils'

type UseBalanceParameters = {
  query?: UseQueryParameters<CoinBalance, Error>
} & Partial<GetBalanceParams>

export function useBalance({
  owner,
  coinType = '0x2::sui::SUI',
  query = {}
}: UseBalanceParameters) {
  const suiClient = useSuiClient()

  const { data: balance, ...result } = useQuery({
    ...query,
    queryKey: ['useBalance'],
    queryFn: async () => {
      if (!owner) throw new Error('address is required')
      console.log(coinType)

      return suiClient.getBalance({
        owner: owner,
        coinType
      })
    },
    enabled: Boolean(suiClient && owner)
  })

  return {
    ...result,
    balance
  }
}
