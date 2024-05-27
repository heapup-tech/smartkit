import { useWalletGroups } from '@heapup/smartkit-hooks'
import type { Wallet } from '@heapup/smartkit-hooks'
import { ConnectGroup } from './ConnectGroup'
import PageHeader from '../../components/PageContailer/PageHeader'
// import IconButton from '../../components/Button/IconButton'
// import InfoIcon from '../../icons/InfoIcon'
import { usePageContext } from '../PageProvider'

export default function ConnectOptions() {
  const walletGroups = useWalletGroups()

  const pageContext = usePageContext()

  const handleConnect = (wallet: Wallet) => {
    pageContext.pushPage('connect')
    pageContext.setSelectedWallet(wallet)
  }

  return (
    <div>
      {/* <PageHeader
        label="Connect Wallet"
        attach={
          <IconButton
            icon={<InfoIcon />}
            onClick={() => {
              pageContext.pushPage('about')
            }}
          />
        }
      /> */}
      <div>
        {walletGroups.map((walletGroup) => {
          return (
            <ConnectGroup
              key={walletGroup.groupName}
              walletGroup={walletGroup}
              onClick={handleConnect}
            />
          )
        })}
      </div>
    </div>
  )
}
