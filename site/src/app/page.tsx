'use client'
import { ConnectButton } from '@heapup/smartkit'
import {
  useAccount,
  useBalance,
  useCoinMetadata,
  useSendTransaction,
  useSignMessage
} from '@heapup/smartkit-hooks'
import { TransactionBlock } from '@mysten/sui.js/transactions'

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
    <main className="">
      <ConnectButton />

      <button
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
      {minting && <div>Minting...</div>}
    </main>
  )
}
