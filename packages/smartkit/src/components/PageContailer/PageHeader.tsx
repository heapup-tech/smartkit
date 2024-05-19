import CloseIcon from '../../icons/CloseIcon'
import IconButton from '../Button/IconButton'
import { useSmartKitContext } from '../SmartKitProvider'
import styles from './styles.css'

interface PageHeaderProps {
  label: string
  closeable?: boolean
  attach?: React.ReactNode | string
}

export default function PageHeader({
  label,
  attach,
  closeable = true
}: PageHeaderProps) {
  const { setOpen } = useSmartKitContext()
  return (
    <div className={styles.pageHeader}>
      <span>{attach}</span>
      <span className={styles.pageHeaderTitle}>{label}</span>
      {closeable && (
        <IconButton
          icon={<CloseIcon />}
          onClick={() => {
            setOpen(false)
          }}
        />
      )}
    </div>
  )
}
