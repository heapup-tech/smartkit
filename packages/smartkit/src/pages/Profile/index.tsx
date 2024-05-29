import { useAccount, useDisconnect } from '@heapup/smartkit-hooks'
import styles from './styles.css'
import { useSmartKitContext } from '../../components/SmartKitProvider'
import { truncateAddress } from '../../utils'
import { DisconnectIcon } from '../../icons/DisconnectIcon'
import CopyIcon from '../../icons/CopyIcon'
import { useState } from 'react'
import CheckedIcon from '../../icons/CheckedIcon'
import Avatar from '../../components/Avatar'
import { usePageContext } from '../PageProvider'
import Balance from '../../components/Balance'

export default function Profile() {
  const { account } = useAccount()
  const { popPage } = usePageContext()
  const { setOpen } = useSmartKitContext()

  const { disconnect } = useDisconnect({
    mutation: {
      onSuccess: () => {
        popPage()
        setOpen(false)
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

  return (
    <div className={styles.profileContent}>
      <Avatar address={account?.address} />
      <div className={styles.address}>{truncateAddress(account?.address)}</div>
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
