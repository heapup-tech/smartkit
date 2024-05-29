import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { useSuiClient } from './useSuiClient'
import { SuiClient } from '@mysten/sui.js/client'
import { UseQueryParameters } from '../types/utils'

type SuiQueryMethod = {
  [K in keyof SuiClient]: SuiClient[K] extends (args: any) => Promise<any>
    ? K
    : never
}[keyof SuiClient]

type SuiQueryMethodParams = {
  [K in SuiQueryMethod]: SuiClient[K] extends (args: infer P) => any ? P : never
}

type SuiQueryMethodReturn = {
  [K in SuiQueryMethod]: SuiClient[K] extends (args: any) => Promise<infer R>
    ? R
    : never
}

type UseCommonQueryParameters<T extends SuiQueryMethod> = UseQueryParameters<
  SuiQueryMethodReturn[T],
  Error
>

export function useClientQuery<T extends SuiQueryMethod>(
  method: T,
  params?: Partial<SuiQueryMethodParams[T]>,
  query?: UseCommonQueryParameters<T>
): UseQueryResult<SuiQueryMethodReturn[T], Error> {
  const suiClient = useSuiClient()

  return useQuery({
    ...query,
    queryKey: ['useClientQuery', method, params],
    queryFn: async (): Promise<SuiQueryMethodReturn[T]> => {
      return (await suiClient[method](
        params as never
      )) as SuiQueryMethodReturn[T]
    }
  })
}
