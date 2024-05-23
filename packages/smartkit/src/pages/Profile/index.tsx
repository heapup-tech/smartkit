import { useAccount, useBalance, useDisconnect } from '@heapup/smartkit-hooks'
import PageHeader from '../../components/PageContailer/PageHeader'
import styles from './styles.css'
import AnimateButton from '../../components/Button/AnimateButton'
import { useSmartKitContext } from '../../components/SmartKitProvider'
import { formatSui, truncateAddress } from '../../utils'
import { DisconnectIcon } from '../../icons/DisconnectIcon'
import CopyIcon from '../../icons/CopyIcon'
import { useState } from 'react'
import CheckedIcon from '../../icons/CheckedIcon'

export default function Profile() {
  const { account } = useAccount()
  const { disconnect } = useDisconnect()
  const { setOpen } = useSmartKitContext()

  const { data: balance } = useBalance({
    address: account?.address
  })
  const formatedBalance = formatSui(BigInt(balance?.totalBalance || 0))
  const handleDisconnect = () => {
    disconnect()

    setOpen(false)
  }

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
    <div>
      <PageHeader label="Connected" />
      <div className={styles.profileContent}>
        <div className={styles.address}>
          {truncateAddress(account?.address)}
        </div>
        <div className={styles.balance}> {formatedBalance} Sui</div>

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
    </div>
  )
}
