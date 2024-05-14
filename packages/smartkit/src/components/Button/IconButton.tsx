import AnimateButton from './AnimateButton'
import styles from './styles.css'
import { ButtonProps } from './types'
export default function IconButton({ icon, onClick }: ButtonProps) {
  return (
    <AnimateButton className={styles.iconButton} onClick={onClick}>
      {icon}
    </AnimateButton>
  )
}
