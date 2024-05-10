import Dialog from '../Common/Dialog'

interface ConnectModalProps {
  open: boolean
  onClose: () => void
}

export function ConnectModal({ open, onClose }: ConnectModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div>dialog content</div>
    </Dialog>
  )
}
