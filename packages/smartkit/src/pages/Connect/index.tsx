import { UninstalledWallet, useConnect } from '@heapup/smartkit-hooks'
import { useEffect, useState } from 'react'
import { usePageContext } from '../PageProvider'
import { useSmartKitContext } from '../../components/SmartKitProvider'
import PageHeader from '../../components/PageContailer/PageHeader'
import styles from './styles.css'
import AnimateButton from '../../components/Button/AnimateButton'

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

  const notInstalled = (
    <div className={styles.notInstalled}>
      <img
        src={selectedWallet?.icon}
        alt={selectedWallet?.name}
        className={styles.walletIcon}
      />
      <div>{selectedWallet?.name} has not been installed</div>
      <a
        href={(selectedWallet as UninstalledWallet).downloadUrl}
        target="__blank"
        style={{
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <AnimateButton className={styles.downloadButton}>
          Install Wallet
        </AnimateButton>
      </a>
    </div>
  )

  const connectStatus = (
    <div className={styles.connectStatus}>
      <img
        src={selectedWallet?.icon}
        alt={selectedWallet?.name}
        className={styles.walletIcon}
      />
      {connecting ? (
        <div className={styles.connectingText}>Connecting...</div>
      ) : connectFailed ? (
        <div className={styles.connectFailedText}>Connect failed</div>
      ) : null}
      {connectFailed && (
        <AnimateButton className={styles.retryButton} onClick={handleConnect}>
          Retry
        </AnimateButton>
      )}
    </div>
  )

  return (
    <div className={styles.connectContainer}>
      <PageHeader label={selectedWallet?.name || 'Connect Wallet'} backable />

      <div className={styles.connectContent}>
        {isInstalled ? connectStatus : notInstalled}

        {/* {connecting ? (
          <div>Connecting...</div>
        ) : connectFailed ? (
          <div>Connect failed</div>
        ) : null}
        <div onClick={handleConnect}>retry</div> */}
      </div>
    </div>
  )
}
