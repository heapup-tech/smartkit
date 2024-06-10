import { useAccount, useDisconnect } from '@heapup/smartkit-hooks'
import styles from './styles.css'
import { truncateAddress } from '../../utils'
import { DisconnectIcon } from '../../icons/DisconnectIcon'
import CopyIcon from '../../icons/CopyIcon'
import { useEffect, useState } from 'react'
import CheckedIcon from '../../icons/CheckedIcon'
import Avatar from '../../components/Avatar'
import { usePageContext } from '../PageProvider'
import Balance from '../../components/Balance'
import { useModalContext } from '../../components/ModalProvider'
import SwitchAccount from '../../components/SwicthAccount'

export default function Profile() {
  const { account, accounts } = useAccount()
  const { popPage } = usePageContext()
  const { closeModal } = useModalContext()

  const { disconnect } = useDisconnect({
    mutation: {
      onSuccess: () => {
        popPage()
        closeModal()
      }
    }
  })
  const handleDisconnect = () => disconnect()

  const [clipboard, setClipboard] = useState(false)

  let timeout: NodeJS.Timeout
  const handleCopy = () => {
    if (navigator.clipboard && account?.address) {
      navigator.clipboard.writeText(account.address)
    }
    setClipboard(true)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setClipboard(false)
    }, 1000)
  }

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={styles.profileContent}>
      <div style={{ position: 'relative' }}>
        <Avatar address={account?.address} />
        {accounts.length > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              transform: 'translate(20%, 0)'
            }}
          >
            <SwitchAccount />
          </div>
        )}
      </div>
      <div className={styles.address}>
        {account?.label || truncateAddress(account?.address)}
      </div>
      <div className={styles.balance}>
        <Balance address={account?.address} />
      </div>

      <div className={styles.buttonRow}>
        <div className={styles.disConnectButton} onClick={handleCopy}>
          {clipboard ? (
            <>
              <CheckedIcon />
              <span>Copyed</span>
            </>
          ) : (
            <>
              <CopyIcon />
              <span>Copy Address</span>
            </>
          )}
        </div>
        <div className={styles.disConnectButton} onClick={handleDisconnect}>
          <DisconnectIcon />
          <span>Disconnect</span>
        </div>
      </div>
    </div>
  )
}
