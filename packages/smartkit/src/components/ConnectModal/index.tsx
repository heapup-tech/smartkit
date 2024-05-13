import Dialog from '../Dialog'
import WalletOptions from '../WalletOptions'

interface ConnectModalProps {
  open: boolean
  onClose: () => void
}

export function ConnectModal({ open, onClose }: ConnectModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <WalletOptions />
    </Dialog>
  )
}
