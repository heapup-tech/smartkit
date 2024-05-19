import { InstalledWallet, useConnect, Wallet } from '@heapup/smartkit-hooks'
import { useEffect, useState } from 'react'
import { usePageContext } from '../PageProvider'
import { useSmartKitContext } from '../../components/SmartKitProvider'
import PageHeader from '../../components/PageContailer/PageHeader'
import InfoIcon from '../../icons/InfoIcon'

export default function Connect() {
  const {
    connect,
    isSuccess: connectSuccess,
    isPending: connecting,
    isError: connectFailed,
    error: connectError
  } = useConnect()

  const { selectedWallet } = usePageContext()
  const smartKitContext = useSmartKitContext()

  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    handleConnect()
  }, [selectedWallet])

  const handleConnect = () => {
    if (!selectedWallet) return
    if ('features' in selectedWallet) {
      setIsInstalled(true)
      connect({
        wallet: selectedWallet
      })
    } else {
      setIsInstalled(false)
    }
  }

  useEffect(() => {
    connectSuccess && smartKitContext.setOpen(false)
  }, [connectSuccess])

  return (
    <div>
      <PageHeader label={selectedWallet?.name || 'Connect Wallet'} backable />

      {connecting ? (
        <div>Connecting...</div>
      ) : connectFailed ? (
        <div>Connect failed</div>
      ) : null}
      <div onClick={handleConnect}>retry</div>
    </div>
  )
}
