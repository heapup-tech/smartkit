import { UseMutationOptions } from '@tanstack/react-query'

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
