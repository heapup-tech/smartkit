import { ConnectButton } from '@heapup/sui-connectkit'
import '@heapup/sui-connectkit/styles.css'

function App() {
  return (
    <div
      style={
        {
          // height: '800px'
        }
      }
    >
      <ConnectButton />

      {/* <ConnectModal /> */}
    </div>
  )
}

export default App
