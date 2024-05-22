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
  showBalance = false
}: ConnectButtonProps) {
  const smartKitContext = useSmartKitContext()
  const pageContext = usePageContext()

  const { isConnected, account } = useAccount()
  useBalance()

  const handleConnectButtonClick = () => {
    console.log(pageContext.currentPage)

    smartKitContext.setOpen(true)
  }

  console.log('isConnected', isConnected)

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
