import styles from './styles.css'
import ThemeContainer from '../ThemeContainer'
import AnimateButton from '../Button/AnimateButton'
import { useAccount } from '@heapup/smartkit-hooks'
import BalanceButton from './BalanceButton'
import Avatar from '../Avatar'
import { useModalContext } from '../ModalProvider'

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
  const { openModal } = useModalContext()

  const { isConnected, account } = useAccount()

  return (
    <>
      <ThemeContainer>
        {isConnected ? (
          showBalance ? (
            <BalanceButton onClick={openModal} showAvatar={showAvatar} />
          ) : (
            <AnimateButton className={styles.connectButton} onClick={openModal}>
              <Avatar address={account?.address} size={25}></Avatar>
              {account?.label || account?.address}
            </AnimateButton>
          )
        ) : (
          <AnimateButton onClick={openModal} className={styles.connectButton}>
            {label}
          </AnimateButton>
        )}
      </ThemeContainer>
    </>
  )
}
