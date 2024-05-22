import { useAccount, useBalance, useDisconnect } from '@heapup/smartkit-hooks'
import PageHeader from '../../components/PageContailer/PageHeader'
import styles from './styles.css'
import AnimateButton from '../../components/Button/AnimateButton'
import { useSmartKitContext } from '../../components/SmartKitProvider'

export default function Profile() {
  const { account } = useAccount()
  const { disconnect } = useDisconnect()
  const { setOpen } = useSmartKitContext()

  const { data: balance } = useBalance({
    address: account?.address
  })

  console.log(balance?.totalBalance)
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
          {account?.label || account?.address}
          {balance?.totalBalance} Sui
        </div>

        <AnimateButton onClick={handleDisconnect}>Disconnect</AnimateButton>
      </div>
    </div>
  )
}
