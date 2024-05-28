import { AnimatePresence, motion } from 'framer-motion'
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
      <div className={styles.pageHeaderIcon}>
        {backable ? (
          <IconButton icon={<BackIcon />} onClick={popPage} />
        ) : (
          <div>{attach}</div>
        )}
      </div>
      <div className={styles.pageHeaderTitle}>
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            key={label}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%'
            }}
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className={styles.pageHeaderIcon}>
        {closeable && (
          <IconButton
            icon={<CloseIcon />}
            onClick={() => {
              setOpen(false)
            }}
          />
        )}
      </div>
    </div>
  )
}
