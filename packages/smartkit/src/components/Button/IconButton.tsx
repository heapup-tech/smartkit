import React from 'react'
import AnimateButton from './AnimateButton'
import styles from './styles.css'
export default function IconButton({ icon }: { icon: React.ReactNode }) {
  return <AnimateButton className={styles.iconButton}>{icon}</AnimateButton>
}
