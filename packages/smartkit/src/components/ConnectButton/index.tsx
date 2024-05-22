import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'
import { useSmartKitContext } from '../SmartKitProvider'
import { useAccount, useBalance } from '@heapup/smartkit-hooks'
import { usePageContext } from '../../pages/PageProvider'

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

  const { data: balance } = useBalance({
    address: account?.address
  })

  console.log(balance?.totalBalance)

  return (
    <>
      <ThemeContainer>
        {isConnected ? (
          showBalance ? (
            <AnimateButton
              className={styles.connectButton}
              onClick={handleConnectButtonClick}
            >
              {account?.label || account?.address}
              {100} sui
            </AnimateButton>
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
