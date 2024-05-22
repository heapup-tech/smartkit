import { useAccount } from '@heapup/smartkit-hooks'
import PageHeader from '../../components/PageContailer/PageHeader'
import styles from './styles.css'
import AnimateButton from '../../components/Button/AnimateButton'

export default function Profile() {
  const { account } = useAccount()
  const handleDisconnect = () => {
    console.log('disconnect')
  }
  return (
    <div>
      <PageHeader label="Connected" />
      <div className={styles.profileContent}>
        <div className={styles.address}>
          {account?.label || account?.address}
        </div>

        <AnimateButton onClick={handleDisconnect}>Disconnect</AnimateButton>
      </div>
    </div>
  )
}
