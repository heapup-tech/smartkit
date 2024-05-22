import {
  DefaultError,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions
} from '@tanstack/react-query'

export type Evaluate<type> = { [key in keyof type]: type[key] } & unknown

export type ExactPartial<type> = {
  [key in keyof type]?: type[key] | undefined
}

export type UseMutationParameters<
  data = unknown,
  error = Error,
  variables = void,
  context = unknown
> = Evaluate<
  Omit<
    UseMutationOptions<data, error, Evaluate<variables>, context>,
    'mutationFn' | 'mutationKey' | 'throwOnError'
  >
>

export type UseQueryParameters<
  queryFnData = unknown,
  error = DefaultError,
  data = queryFnData,
  queryKey extends QueryKey = QueryKey
> = Evaluate<
  Omit<
    UseQueryOptions<queryFnData, error, data, queryKey>,
    'queryFn' | 'queryHash' | 'queryKey' | 'queryKeyHashFn' | 'throwOnError'
  >
>
