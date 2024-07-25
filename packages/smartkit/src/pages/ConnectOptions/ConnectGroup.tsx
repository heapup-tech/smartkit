import type { Wallet, WalletGroup } from '@heapup/smartkit-hooks'
import styles from './styles.css'

export interface ConnectGroupProps {
  walletGroup: WalletGroup
  onClick: (wallet: Wallet) => void
}

export function ConnectGroup({ walletGroup, onClick }: ConnectGroupProps) {
  const ConnectItem = ({ wallet }: { wallet: Wallet }) => {
    return (
      <div className={styles.walletItem} onClick={() => onClick(wallet)}>
        <div className={styles.walletItemLeft}>
          <img
            src={wallet.icon}
            alt={wallet.name}
            className={styles.walletIcon}
          />
          <div>{wallet.name}</div>
        </div>

        <svg
          width="14"
          height="13"
          viewBox="0 0 11 10"
          className={styles.walletItemArrowRight}
        >
          <rect
            y="4.25"
            width="10.5"
            height="1.5"
            rx="0.75"
            fill="currentColor"
            className={styles.walletItemArrowInnerRect}
          ></rect>
          <path
            d="M5.75 1L9.75 5L5.75 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
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
