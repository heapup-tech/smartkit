import { useAccount } from '@heapup/smartkit-hooks'
import styles from './styles.css'
import SwitchIcon from '../../icons/SwitchIcon'
import Dropdown from '../Dropdown/Dropdown'
import DropdownTrigger from '../Dropdown/DropdownTrigger'

export default function AccountList() {
  const { accounts } = useAccount()

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <div className={styles.indicator}>
            <SwitchIcon />
          </div>
        </DropdownTrigger>
      </Dropdown>
    </div>
  )
}
