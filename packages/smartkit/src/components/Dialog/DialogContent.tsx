import { motion } from 'framer-motion'
import styles from './styles.css'

export default function DialogContent({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{
        scale: 0.97
      }}
      animate={{
        scale: 1
      }}
      transition={{
        duration: 0.15,
        ease: 'linear'
      }}
      exit={{
        scale: 0.97
      }}
      onClick={(e) => e.stopPropagation()}
      className={styles.dialogContent}
    >
      {children}
    </motion.div>
  )
}
