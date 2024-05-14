import { useState } from 'react'
import { ConnectModal } from '../ConnectModal'
import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
}

export function ConnectButton({
  label = 'Connect Wallet',
  showBalance = true
}: ConnectButtonProps) {
  const [open, setOpen] = useState(true)
  const [connected] = useState(false)
  return (
    <>
      <ThemeContainer>
        {connected ? (
          showBalance && <></>
        ) : (
          <AnimateButton
            onClick={() => setOpen(true)}
            className={styles.connectButton}
          >
            {label}
          </AnimateButton>
        )}

        <ConnectModal open={open} onClose={() => setOpen(false)} />
      </ThemeContainer>
    </>
  )
}
