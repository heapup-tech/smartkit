import { useState } from 'react'
import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'
import { useSmartKitContext } from '../SmartKitProvider'
import { useAccount } from '@heapup/smartkit-hooks'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
}

export function ConnectButton({
  label = 'Connect Wallet',
  showBalance = true
}: ConnectButtonProps) {
  const smartKitContext = useSmartKitContext()

  const { isConnected, address } = useAccount()
  return (
    <>
      <ThemeContainer>
        {isConnected ? (
          showBalance && (
            <AnimateButton className={styles.connectButton}>
              {address}
            </AnimateButton>
          )
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
