import { motion } from 'framer-motion'
import styles from './styles.css'
import { ButtonProps } from './types'

export default function AnimateButton(props: ButtonProps) {
  return (
    <motion.button
      className={styles.animateButton}
      whileHover={{
        scale: 1.03
      }}
      whileTap={{
        scale: 0.97
      }}
      transition={{
        duration: 0.1
      }}
      {...props}
    >
      {props.children}
    </motion.button>
  )
}
