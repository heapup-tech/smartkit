import { useConnect, useWalletGroups } from '@heapup/smartkit-hooks'
import type { Wallet } from '@heapup/smartkit-hooks'
import AnimateButton from '../Button/AnimateButton'

export default function ConnectOptions() {
  const walletGroups = useWalletGroups()

  console.log(walletGroups)

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
            {walletGroup.wallets.map((wallet) => {
              return (
                <div key={wallet.name}>
                  <AnimateButton onClick={() => handleConnect(wallet)}>
                    {wallet.name}
                  </AnimateButton>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
