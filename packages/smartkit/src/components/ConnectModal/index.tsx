import Dialog from '../Dialog'
import { content } from './styles.css'

interface ConnectModalProps {
  open: boolean
  onClose: () => void
}

export function ConnectModal({ open, onClose }: ConnectModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className={content}>dialog content</div>
    </Dialog>
  )
}
