import { useConnect } from '@heapup/smartkit-hooks'
import AnimateButton from '../Button/AnimateButton'

export default function ConnectorItem() {
  const { connect } = useConnect()
  return (
    <div>
      <AnimateButton onClick={connect}>Sui Wallet</AnimateButton>
    </div>
  )
}
