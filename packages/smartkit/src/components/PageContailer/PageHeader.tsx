import BackIcon from '../../icons/BackIcon'
import CloseIcon from '../../icons/CloseIcon'
import { usePageContext } from '../../pages/PageProvider'
import IconButton from '../Button/IconButton'
import { useSmartKitContext } from '../SmartKitProvider'
import styles from './styles.css'

interface PageHeaderProps {
  label: string
  closeable?: boolean
  backable?: boolean
  attach?: React.ReactNode | string
}

export default function PageHeader({
  label,
  attach,
  closeable = true,
  backable = false
}: PageHeaderProps) {
  const { setOpen } = useSmartKitContext()
  const { popPage } = usePageContext()
  return (
    <div className={styles.pageHeader}>
      {backable ? (
        <IconButton icon={<BackIcon />} onClick={popPage} />
      ) : (
        <span>{attach}</span>
      )}
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
