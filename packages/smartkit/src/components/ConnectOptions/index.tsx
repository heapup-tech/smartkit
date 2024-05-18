import { useConnect, useWalletGroups } from '@heapup/smartkit-hooks'
import type { Wallet } from '@heapup/smartkit-hooks'
import AnimateButton from '../Button/AnimateButton'
import { ConnectGroup } from './ConnectGroup'

export default function ConnectOptions() {
  const walletGroups = useWalletGroups()

  const { connect, isSuccess: connectSuccess } = useConnect()

  const handleConnect = (wallet: Wallet) => {
    if ('features' in wallet) {
      connect({
        wallet
      })
    } else {
      console.log(`${wallet.name} not installed`)
    }
  }

  return (
    <div>
      {walletGroups.map((walletGroup) => {
        return (
          <div key={walletGroup.groupName}>
            <ConnectGroup walletGroup={walletGroup} onClick={handleConnect} />
          </div>
        )
      })}
    </div>
  )
}
