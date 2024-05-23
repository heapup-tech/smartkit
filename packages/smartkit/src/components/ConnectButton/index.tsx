import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'
import { useSmartKitContext } from '../SmartKitProvider'
import { useAccount } from '@heapup/smartkit-hooks'
import BalanceButton from './BalanceButton'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
}

export function ConnectButton({
  label = 'Connect Wallet',
  showBalance = true
}: ConnectButtonProps) {
  const smartKitContext = useSmartKitContext()

  const { isConnected, account } = useAccount()

  const handleConnectButtonClick = () => {
    smartKitContext.setOpen(true)
  }

  return (
    <>
      <ThemeContainer>
        {isConnected ? (
          showBalance ? (
            <BalanceButton onClick={handleConnectButtonClick} />
          ) : (
            <AnimateButton
              className={styles.connectButton}
              onClick={handleConnectButtonClick}
            >
              {account?.label || account?.address}
            </AnimateButton>
          )
        ) : (
          <AnimateButton
            onClick={handleConnectButtonClick}
            className={styles.connectButton}
          >
            {label}
          </AnimateButton>
        )}
      </ThemeContainer>
    </>
  )
}
