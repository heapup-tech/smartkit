import { useAccount, useSwitchAccount } from '@heapup/smartkit-hooks'
import styles from './styles.css'
import Avatar from '../../components/Avatar'
import { truncateAddress } from '../../utils'

export default function SwitchAccountList() {
  const { account: currentAccount, accounts } = useAccount()
  if (accounts.length === 0) return null

  const { switchAccountAsync } = useSwitchAccount()

  return (
    <div className={styles.accountListWrapper}>
      {accounts.map((account) => {
        return (
          <div
            className={
              account.address === currentAccount?.address
                ? styles.selectAccountItem
                : styles.accountItem
            }
            key={account.address}
            onClick={async () => {
              if (account.address === currentAccount?.address) return
              await switchAccountAsync(account)
            }}
          >
            <Avatar address={account.address} size={20}></Avatar>
            {account.label || truncateAddress(account.address)}
          </div>
        )
      })}
    </div>
  )
}
