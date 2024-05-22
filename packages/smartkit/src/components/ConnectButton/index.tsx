import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'
import { useSmartKitContext } from '../SmartKitProvider'
import { useAccount, useBalance } from '@heapup/smartkit-hooks'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
}

export function ConnectButton({
  label = 'Connect Wallet',
  showBalance = false
}: ConnectButtonProps) {
  const smartKitContext = useSmartKitContext()

  const { isConnected, account } = useAccount()
  useBalance()

  return (
    <>
      <ThemeContainer>
        {isConnected ? (
          showBalance ? (
            <AnimateButton className={styles.connectButton}>
              {account?.label || account?.address}
            </AnimateButton>
          ) : (
            <AnimateButton className={styles.connectButton}>
              {account?.label || account?.address}
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
