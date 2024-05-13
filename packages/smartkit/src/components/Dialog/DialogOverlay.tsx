import { motion } from 'framer-motion'
import styles from './styles.css'
import { useCallback } from 'react'

export default function DialogOverlay({
  children,
  onClose
}: {
  children: React.ReactNode
  onClose: () => void
}) {
  const handleCloseModal = useCallback(() => onClose(), [onClose])
  return (
    <motion.div
      className={styles.dialogOverlay}
      role="dialog"
      onClick={handleCloseModal}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.15,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}
