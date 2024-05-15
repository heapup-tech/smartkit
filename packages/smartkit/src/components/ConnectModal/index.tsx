import ConnectorList from '../ConnectorList'
import Dialog from '../Dialog'

interface ConnectModalProps {
  open: boolean
  onClose: () => void
}

export function ConnectModal({ open, onClose }: ConnectModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <ConnectorList />
    </Dialog>
  )
}
