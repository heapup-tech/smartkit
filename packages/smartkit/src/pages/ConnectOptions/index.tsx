import { useConnect, useWalletGroups } from '@heapup/smartkit-hooks'
import type { Wallet } from '@heapup/smartkit-hooks'
import { ConnectGroup } from './ConnectGroup'
import { useEffect } from 'react'
import { useSmartKitContext } from '../../components/SmartKitProvider'
import PageHeader from '../../components/PageContailer/PageHeader'
import IconButton from '../../components/Button/IconButton'
import InfoIcon from '../../icons/InfoIcon'
import { usePageContext } from '../PageProvider'

export default function ConnectOptions() {
  const walletGroups = useWalletGroups()
  const smartKitContext = useSmartKitContext()
  const pageContext = usePageContext()

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

  useEffect(() => {
    connectSuccess && smartKitContext.setOpen(false)
  }, [connectSuccess])

  return (
    <div>
      <PageHeader
        label="Connect Wallet"
        attach={
          <IconButton
            icon={<InfoIcon />}
            onClick={() => {
              pageContext.setCurrentPage('about')
            }}
          />
        }
      ></PageHeader>
      {walletGroups.map((walletGroup) => {
        return (
          <div key={walletGroup.groupName}>
            <ConnectGroup walletGroup={walletGroup} onClick={handleConnect} />
          </div>
        )
      })}
      <span>{connectSuccess ? 'connectSuccess' : 'none'}</span>
    </div>
  )
}
