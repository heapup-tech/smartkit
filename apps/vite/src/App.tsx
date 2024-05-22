import { ConnectButton } from '@heapup/smartkit'
import { useAccount } from '@heapup/smartkit-hooks'
import '@heapup/smartkit/styles.css'

function App() {
  const { accounts } = useAccount()
  console.log(accounts?.map((account) => account.address))

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
