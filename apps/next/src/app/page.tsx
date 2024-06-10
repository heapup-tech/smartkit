'use client'

import { ConnectButton } from '@heapup/smartkit'
import { useAccount } from '@heapup/smartkit-hooks'

export default function Home() {
  const { account } = useAccount()
  return (
    <main className="flex flex-col min-h-screen">
      <header className="flex justify-end">
        <ConnectButton />
      </header>

      <div className="flex-1 flex items-center justify-center">
        {account?.address}
      </div>
    </main>
  )
}
