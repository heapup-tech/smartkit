import { ConnectButton } from '@heapup/smartkit'
import { useAccount } from '@heapup/smartkit-hooks'
import '@heapup/smartkit/styles.css'

function App() {
  const { addresses, address } = useAccount()
  console.log(`addresses: ${addresses}, address: ${address}`)

  return (
    <div
      style={{
        height: '2000px'
      }}
    >
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ConnectButton />
      </div>

      {/* <ConnectModal /> */}
    </div>
  )
}

export default App
