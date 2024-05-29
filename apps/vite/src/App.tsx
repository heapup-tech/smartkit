import { ConnectButton } from '@heapup/smartkit'
import { useAccount, useClientQuery } from '@heapup/smartkit-hooks'
import '@heapup/smartkit/styles.css'

function App() {
  const { isConnected, isConnecting, account } = useAccount()

  const { data } = useClientQuery('getBalance', {
    owner: account?.address
  })
  console.log(data)

  return (
    <div
      style={{
        height: '2000px'
      }}
    >
      <div>
        {isConnecting
          ? 'Connecting'
          : isConnected
          ? 'Connected'
          : 'Disconnected'}
      </div>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          rowGap: '30px'
        }}
      >
        <ConnectButton />
      </div>
    </div>
  )
}

export default App
