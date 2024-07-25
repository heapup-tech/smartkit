import { useAccount } from '@heapup/smartkit-hooks'
import { truncateAddress } from '../../utils'
import AnimateButton from '../Button/AnimateButton'
import styles from './styles.css'
import Avatar from '../Avatar'
import Balance from '../Balance'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

export default function BalanceButton({
  onClick,
  showAvatar = true
}: {
  onClick: () => void
  showAvatar?: boolean
}) {
  const { account } = useAccount()

  return (
    <AnimateButton className={styles.connectButton} onClick={onClick}>
      <div className={styles.balance}>
        <Balance address={account?.address} />
      </div>
      {showAvatar && <Avatar size={25} address={account?.address} />}
      <div>{account?.label || truncateAddress(account?.address)}</div>
      <ArrowDownIcon />
    </AnimateButton>
  )
}
