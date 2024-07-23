import { useWalletGroups } from '@heapup/smartkit-hooks'
import type { Wallet } from '@heapup/smartkit-hooks'
import { ConnectGroup } from './ConnectGroup'
import { usePageContext } from '../PageProvider'
import { NoWalletTip } from '../../components/NoWalletTip'
import styles from './styles.css'

export default function ConnectOptions() {
  const walletGroups = useWalletGroups()

  const pageContext = usePageContext()

  const handleConnect = (wallet: Wallet) => {
    pageContext.pushPage('connect')
    pageContext.setSelectedWallet(wallet)
  }

  return (
    <div className={styles.connectOptionsContainer}>
      <div className={styles.connectGroupContainer}>
        {walletGroups.map((walletGroup) => {
          return (
            <ConnectGroup
              key={walletGroup.groupName}
              walletGroup={walletGroup}
              onClick={handleConnect}
            />
          )
        })}
      </div>

      <div style={{ position: 'sticky', bottom: 0 }}>
        <NoWalletTip />
      </div>
    </div>
  )
}
