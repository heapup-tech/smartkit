import { useState } from 'react'
import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'
import { useSmartKitContext } from '../SmartKitProvider'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
}

export function ConnectButton({
  label = 'Connect Wallet',
  showBalance = true
}: ConnectButtonProps) {
  const smartKitContext = useSmartKitContext()
  const [connected] = useState(false)
  return (
    <>
      <ThemeContainer>
        {connected ? (
          showBalance && <></>
        ) : (
          <AnimateButton
            onClick={() => smartKitContext.setOpen(true)}
            className={styles.connectButton}
          >
            {label}
          </AnimateButton>
        )}
      </ThemeContainer>
    </>
  )
}
