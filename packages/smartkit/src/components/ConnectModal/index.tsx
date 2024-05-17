import ConnectOptions from '../ConnectOptions'
import Dialog from '../Dialog'

interface ConnectModalProps {
  open: boolean
  onClose: () => void
}

export function ConnectModal({ open, onClose }: ConnectModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <ConnectOptions />
    </Dialog>
  )
}
