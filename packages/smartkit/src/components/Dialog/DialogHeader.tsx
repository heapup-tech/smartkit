import CloseIcon from '../../icons/CloseIcon'
import InfoIcon from '../../icons/InfoIcon'
import IconButton from '../Button/IconButton'
import styles from './styles.css'

interface DialogHeaderProps {
  onClose: () => void
}

export default function DialogHeader({ onClose }: DialogHeaderProps) {
  return (
    <div className={styles.dialogHeader}>
      <IconButton icon={<InfoIcon onClick={onClose} />} />
      <span className={styles.dialogHeaderTitle}>Connect Wallet</span>
      <IconButton icon={<CloseIcon onClick={onClose} />} />
    </div>
  )
}
