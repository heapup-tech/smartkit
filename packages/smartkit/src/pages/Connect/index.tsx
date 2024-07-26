import { UninstalledWallet, useConnect } from '@heapup/smartkit-hooks'
import { useEffect, useState } from 'react'
import { usePageContext } from '../PageProvider'
import styles from './styles.css'
import { motion, useAnimation } from 'framer-motion'
import RetryIcon from '../../icons/RetryIcon'
import AnimateButton from '../../components/Button/AnimateButton'

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

  const shakeAnim = useAnimation()
  const startshakeAnim = () => {
    shakeAnim.start({
      x: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.25
      }
    })
  }

  useEffect(() => {
    if (connectFailed) startshakeAnim()
  }, [connectFailed])

  const notInstalled = (
    <>
      <motion.div className={styles.walletBrand} animate={shakeAnim}>
        <img
          src={selectedWallet?.icon}
          alt={selectedWallet?.name}
          className={styles.walletIcon}
        />
      </motion.div>
      <div className={styles.connectTitle}>
        <div
          className={styles.connectDesc}
          style={{
            marginTop: 0
          }}
        >
          {selectedWallet?.name || 'Wallet'} has not been installed
        </div>
      </div>
      {(selectedWallet as UninstalledWallet).downloadUrl && (
        <a
          href={(selectedWallet as UninstalledWallet).downloadUrl}
          target="__blank"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <AnimateButton className={styles.downloadButton}>
            Download
          </AnimateButton>
        </a>
      )}
    </>
  )

  const connectStatus = (
    <>
      <motion.div className={styles.walletBrand} animate={shakeAnim}>
        <img
          src={selectedWallet?.icon}
          alt={selectedWallet?.name}
          className={styles.walletIcon}
        />

        {connecting && (
          <svg
            viewBox="0 0 110 110"
            className={styles.connectSpinner}
            width="80"
            height="80"
          >
            <motion.path
              d="M28 2 H82 A26 26 0 0 1 108 28 V82 A26 26 0 0 1 82 108 H28 A26 26 0 0 1 2 82 V28 A26 26 0 0 1 28 2"
              fill="none"
              stroke="currentColor"
              strokeWidth="5px"
              strokeLinecap="round"
              pathLength="110"
              strokeDasharray="30 80"
              strokeDashoffset="110"
              animate={{
                strokeDashoffset: [110, 0]
              }}
              transition={{
                duration: 1,
                ease: 'linear',
                repeat: Infinity
              }}
            />
          </svg>
        )}

        {connectFailed && (
          <div className={styles.connectRetry} onClick={handleConnect}>
            <RetryIcon
              style={{
                width: '20px',
                height: '20px'
              }}
            />
          </div>
        )}
      </motion.div>

      {connecting ? (
        <div className={styles.connectTitle}>
          <div>Requesting Connection</div>
          <div className={styles.connectDesc}>
            {`Confirm connection in the ${selectedWallet?.name} browser extension.`}
          </div>
        </div>
      ) : connectFailed ? (
        <div className={styles.connectTitle}>
          <div className={styles.connectFailed}>Connection Failed</div>
          <div className={styles.connectDesc}>
            Wallet connection was cancelled. Click above to try again.
          </div>
        </div>
      ) : null}
    </>
  )

  return (
    <div className={styles.connectContent}>
      {isInstalled ? connectStatus : notInstalled}
    </div>
  )
}
