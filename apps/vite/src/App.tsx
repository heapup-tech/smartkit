import { ConnectButton } from '@heapup/smartkit'
import { useAccount, useBalance } from '@heapup/smartkit-hooks'
import '@heapup/smartkit/styles.css'
import { useEffect } from 'react'

function App() {
  const { accounts, account } = useAccount()

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
