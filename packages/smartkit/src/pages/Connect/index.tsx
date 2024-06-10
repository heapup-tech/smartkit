import { UninstalledWallet, useConnect } from '@heapup/smartkit-hooks'
import { useEffect, useState } from 'react'
import { usePageContext } from '../PageProvider'
import styles from './styles.css'
import AnimateButton from '../../components/Button/AnimateButton'
import { useModalContext } from '../../components/ModalProvider'

export default function Connect() {
  const {
    connect,
    isPending: connecting,
    isError: connectFailed
  } = useConnect()

  const { selectedWallet } = usePageContext()

  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    handleConnect()
  }, [selectedWallet])

  const handleConnect = async () => {
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
      <div className={styles.connectContent}>
        {isInstalled ? connectStatus : notInstalled}
      </div>
    </div>
  )
}
