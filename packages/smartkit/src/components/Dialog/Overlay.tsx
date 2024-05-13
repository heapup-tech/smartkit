import { motion } from 'framer-motion'
import styles from './styles.css'

export default function Overlay({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
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
{
  /* <motion.div
className={styles.overlay}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{
  duration: 0.2,
  ease: 'easeInOut'
}}
></motion.div> */
}
