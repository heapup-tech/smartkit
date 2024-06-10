import { ConnectButton } from '@heapup/smartkit'
import { useAccount } from '@heapup/smartkit-hooks'

function App() {
  const { isConnected, isConnecting } = useAccount()

  return (
    <div>
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
