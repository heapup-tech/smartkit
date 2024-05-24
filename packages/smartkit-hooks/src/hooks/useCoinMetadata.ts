import { useQuery } from '@tanstack/react-query'
import { useSuiClient } from './useSuiClient'
import { UseQueryParameters } from '../types/utils'
import { CoinMetadata, GetCoinMetadataParams } from '@mysten/sui.js/client'

type UseCoinMetadataParameters = {
  query?: UseQueryParameters<CoinMetadata | null, Error>
} & Partial<GetCoinMetadataParams>

export function useCoinMetadata({
  coinType,
  query = {}
}: UseCoinMetadataParameters) {
  const suiClient = useSuiClient()

  const { data: metadata, ...result } = useQuery({
    ...query,
    queryKey: ['useCoinMetadata'],
    queryFn: async () => {
      return await suiClient.getCoinMetadata({
        coinType: coinType!
      })
    },
    enabled: Boolean(suiClient && coinType)
  })

  return {
    ...result,
    metadata
  }
}
