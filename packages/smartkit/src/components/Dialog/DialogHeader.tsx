import styles from './styles.css'

interface DialogHeaderProps {
  onClose: () => void
}

export default function DialogHeader({ onClose }: DialogHeaderProps) {
  return (
    <div className={styles.dialogHeader}>
      <span></span>
      <span>Connect Wallet</span>
      <button onClick={onClose}>×</button>
    </div>
  )
}
