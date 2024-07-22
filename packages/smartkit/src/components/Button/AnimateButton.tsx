import { motion } from 'framer-motion'
import styles from './styles.css'
import { ButtonProps } from './types'

export default function AnimateButton(props: ButtonProps) {
  return (
    <motion.button
      className={styles.animateButton}
      whileHover={{
        scale: 1.01
      }}
      whileTap={{
        scale: 0.99
      }}
      transition={{
        duration: 0.2
      }}
      {...props}
    >
      {props.children}
    </motion.button>
  )
}
