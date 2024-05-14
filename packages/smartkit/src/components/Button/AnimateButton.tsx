import { motion } from 'framer-motion'
import styles from './styles.css'

export interface ButtonProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
}

export default function AnimateButton(props: ButtonProps) {
  return (
    <motion.button
      className={styles.animateButton}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
      transition={{
        ease: 'linear',
        duration: 0.1
      }}
      {...props}
    >
      {props.children}
    </motion.button>
  )
}
