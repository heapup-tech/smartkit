import { UseMutationOptions } from '@tanstack/react-query'

export type Evaluate<type> = { [key in keyof type]: type[key] } & unknown

export type UseMutationParameters = Evaluate<
  Omit<UseMutationOptions, 'mutationFn' | 'mutationKey' | 'throwOnError'>
>
