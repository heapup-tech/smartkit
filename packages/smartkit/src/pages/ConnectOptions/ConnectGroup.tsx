import type { Wallet, WalletGroup } from '@heapup/smartkit-hooks'
import styles from './styles.css'

export interface ConnectGroupProps {
  walletGroup: WalletGroup
  onClick: (wallet: Wallet) => void
}

export function ConnectGroup({ walletGroup, onClick }: ConnectGroupProps) {
  // TODO: with arrow-right icon
  const ConnectItem = ({ wallet }: { wallet: Wallet }) => {
    return (
      <div className={styles.walletItem} onClick={() => onClick(wallet)}>
        <img
          src={wallet.icon}
          alt={wallet.name}
          className={styles.walletIcon}
        />
        <div>{wallet.name}</div>
      </div>
    )
  }

  return (
    <div className={styles.connectGroup}>
      <div className={styles.connectGroupTitle}>{walletGroup.groupName}</div>
      {walletGroup.wallets.map((wallet) => {
        return <ConnectItem key={wallet.name} wallet={wallet} />
      })}
    </div>
  )
}
