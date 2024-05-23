import { useAccount, useBalance } from '@heapup/smartkit-hooks'
import { formatSui, truncateAddress } from '../../utils'
import AnimateButton from '../Button/AnimateButton'
import styles from './styles.css'
import SuiIcon from '../../icons/SuiIcon'
import ArrowDown from '../../icons/arrowDown'

export default function BalanceButton({ onClick }: { onClick: () => void }) {
  const { account } = useAccount()
  const { data: balance } = useBalance({
    address: account?.address
  })

  const formatedBalance = formatSui(BigInt(balance?.totalBalance || 0))
  // class="flex items-center w-full h-full justify-center text-white p-1.5 text-body rounded-full"
  return (
    <AnimateButton className={styles.connectButton} onClick={onClick}>
      <div className={styles.balance}>
        <SuiIcon className="" />
        <span>{formatedBalance}</span>
      </div>
      <div>{account?.label || truncateAddress(account?.address)}</div>
      <ArrowDown />
    </AnimateButton>
  )
}
