import { useWalletGroups } from '@heapup/smartkit-hooks'
import type { Wallet } from '@heapup/smartkit-hooks'
import { ConnectGroup } from './ConnectGroup'
import { usePageContext } from '../PageProvider'

export default function ConnectOptions() {
  const walletGroups = useWalletGroups()

  const pageContext = usePageContext()

  const handleConnect = (wallet: Wallet) => {
    pageContext.pushPage('connect')
    pageContext.setSelectedWallet(wallet)
  }

  return (
    <div>
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
  )
}
