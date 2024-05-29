import { useBalance } from '@heapup/smartkit-hooks'
import { formatSui } from '../../utils'

export default function Balance({ address }: { address?: string }) {
  const { balance } = useBalance({
    owner: address
  })

  const formatedBalance = formatSui(BigInt(balance?.totalBalance || 0))

  return <span>{formatedBalance} SUI</span>
}
