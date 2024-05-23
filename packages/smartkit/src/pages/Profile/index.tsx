import { useAccount, useBalance, useDisconnect } from '@heapup/smartkit-hooks'
import PageHeader from '../../components/PageContailer/PageHeader'
import styles from './styles.css'
import AnimateButton from '../../components/Button/AnimateButton'
import { useSmartKitContext } from '../../components/SmartKitProvider'
import { formatSui, truncateAddress } from '../../utils'

export default function Profile() {
  const { account } = useAccount()
  const { disconnect } = useDisconnect()
  const { setOpen } = useSmartKitContext()

  const { data: balance } = useBalance({
    address: account?.address
  })
  const formatedBalance = formatSui(BigInt(balance?.totalBalance || 0))
  const handleDisconnect = () => {
    console.log('disconnect')
    disconnect()

    setOpen(false)
  }
  return (
    <div>
      <PageHeader label="Connected" />
      <div className={styles.profileContent}>
        <div className={styles.address}>
          {truncateAddress(account?.address)}
        </div>
        <div> {formatedBalance} Sui</div>

        <AnimateButton onClick={handleDisconnect}>Disconnect</AnimateButton>
      </div>
    </div>
  )
}
