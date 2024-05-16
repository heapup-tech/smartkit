import { useConnect } from '@heapup/smartkit-hooks'
import AnimateButton from '../Button/AnimateButton'
import { useEffect } from 'react'

export default function ConnectorItem() {
  const { connect, isPending, isSuccess, data } = useConnect({})

  useEffect(() => {
    // console.log('isPending:', isPending)
  }, [isPending])

  useEffect(() => {
    // console.log('connectSuccess:', isSuccess)
  }, [isSuccess])

  console.log(data?.address)

  return (
    <div>
      <AnimateButton onClick={connect}>Sui Wallet</AnimateButton>
    </div>
  )
}
