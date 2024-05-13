import { useState } from 'react'
import { ConnectModal } from '../ConnectModal'
import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import { motion } from 'framer-motion'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
}

export function ConnectButton({
  label = 'Connect Wallet',
  showBalance = true
}: ConnectButtonProps) {
  const [open, setOpen] = useState(false)
  const [connected] = useState(false)
  return (
    <>
      <ThemeContainer>
        {connected ? (
          showBalance && <></>
        ) : (
          <motion.button
            className={styles.connectButton}
            onClick={() => setOpen(true)}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            transition={{
              ease: 'linear',
              duration: 0.1
            }}
          >
            <span>{label}</span>
          </motion.button>
        )}

        <ConnectModal open={open} onClose={() => setOpen(false)} />
      </ThemeContainer>
    </>
  )
}
