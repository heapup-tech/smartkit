import { useBalance } from '@heapup/smartkit-hooks'
import { formatSui } from '../../utils'
import Skeleton from '../Skeleton'
import { SkeletonStyle } from './styles.css'

export default function Balance({ address }: { address?: string }) {
  const { balance, isLoading } = useBalance({
    owner: address
  })

  if (isLoading)
    return (
      <Skeleton
        className={SkeletonStyle}
        style={{
          height: '100%'
        }}
      />
    )

  // show zero if fetch balance error
  const formatedBalance = formatSui(BigInt(balance?.totalBalance || 0))

  return <span>{formatedBalance} SUI</span>
}
