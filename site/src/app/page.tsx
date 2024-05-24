'use client'
import AppHeader from '@/components/app-header'
import { Button } from '@/components/ui/button'
import { ConnectButton } from '@heapup/smartkit'
import {
  useAccount,
  useCoinMetadata,
  useSendTransaction,
  useSignMessage
} from '@heapup/smartkit-hooks'
import { TransactionBlock } from '@mysten/sui.js/transactions'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const { account } = useAccount()
  const { signMessage } = useSignMessage()
  const { sendTransaction, isPending: minting } = useSendTransaction()

  const packageId =
    '0xdb71f4f1dbc3d6761538fe88e46b8093d43a2a1774e6a9901f3227bd26dfe9bf'

  const coinType = `${packageId}::coin::COIN`
  const { metadata } = useCoinMetadata({
    coinType
  })

  const onMint = () => {
    if (!account) return
    const txBlock = new TransactionBlock()
    const moduleName = 'coin'
    const functionName = 'mint'
    txBlock.moveCall({
      arguments: [
        txBlock.object(
          '0x5c07ee587fdc3aa2c279e57f00de84df920ecfe53e3a71c34d90965c97255f0f'
        ),
        txBlock.pure.u64(
          BigInt(2000000000000) * BigInt(Math.pow(10, metadata?.decimals || 0))
        ),
        txBlock.pure.address(account.address)
      ],
      target: `${packageId}::${moduleName}::${functionName}`
    })
    txBlock.setGasBudget(10000000)

    sendTransaction({
      transactionBlock: txBlock
    })
  }
  return (
    <main className="container relative">
      <div className="flex justify-center mt-16 flex-col items-center gap-y-16">
        <div className="text-red font-semibold text-6xl text-blue-500 text-center">
          <div>Smart Kit</div>
          <div className="text-gray-500 text-lg font-medium mt-4">
            Connect to the Sui network in a simple way
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ConnectButton label="try it out" />

          <Link href="/docs">
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.97
              }}
            >
              <Button className="mt-4">View the Docs</Button>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* <button
        onClick={() => {
          signMessage({
            message: 'Hello, world!'
          }).then((result) => {
            console.log(result)
          })
        }}
      >
        Sign message
      </button>

      <button onClick={onMint}>Mint Token</button>
      {minting && <div>Minting...</div>} */}
    </main>
  )
}
