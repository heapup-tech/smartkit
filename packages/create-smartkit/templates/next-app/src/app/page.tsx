'use client'

import { ConnectButton } from '@heapup/smartkit'
import { useAccount } from '@heapup/smartkit-hooks'

export default function Home() {
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
      <div className="fixed inset-0 flex items-center justify-center flex-col gap-8">
        <ConnectButton />
      </div>
    </div>
  )
}
