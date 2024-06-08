import { useAccount } from '@heapup/smartkit-hooks'
import styles from './styles.css'
import SwitchIcon from '../../icons/SwitchIcon'

export default function AccountList() {
  const { accounts } = useAccount()

  return (
    <div className={styles.indicator}>
      <SwitchIcon />
    </div>
  )
}
