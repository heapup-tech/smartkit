import { useAccount, useBalance } from '@heapup/smartkit-hooks'
import { formatSui, truncateAddress } from '../../utils'
import AnimateButton from '../Button/AnimateButton'
import styles from './styles.css'
import SuiIcon from '../../icons/SuiIcon'
import ArrowDown from '../../icons/ArrowDown'

export default function BalanceButton({ onClick }: { onClick: () => void }) {
  const { account } = useAccount()
  const { balance } = useBalance({
    owner: account?.address
  })

  const formatedBalance = formatSui(BigInt(balance?.totalBalance || 0))

  return (
    <AnimateButton className={styles.connectButton} onClick={onClick}>
      <div className={styles.balance}>
        <SuiIcon className="" />
        {/* TODO: balance loading status */}
        <span>{formatedBalance}</span>
      </div>
      <div>{account?.label || truncateAddress(account?.address)}</div>
      <ArrowDown />
    </AnimateButton>
  )
}
