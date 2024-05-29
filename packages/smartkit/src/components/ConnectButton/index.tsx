import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'
import { useSmartKitContext } from '../SmartKitProvider'
import { useAccount } from '@heapup/smartkit-hooks'
import BalanceButton from './BalanceButton'
import Avatar from '../Avatar'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
  showAvatar?: boolean
}

export function ConnectButton({
  label = 'Connect Wallet',
  showAvatar = true,
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
            <BalanceButton
              onClick={handleConnectButtonClick}
              showAvatar={showAvatar}
            />
          ) : (
            <AnimateButton
              className={styles.connectButton}
              onClick={handleConnectButtonClick}
            >
              <Avatar address={account?.address} size={25}></Avatar>
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
