import { motion } from 'framer-motion'
import styles from './styles.css'
import { useEffect, useRef, useState } from 'react'

export default function DialogContent({
  children
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number | 'auto'>('auto')
  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedHeight = entries[0].contentRect.height
        setHeight(observedHeight + 48)
      })
      resizeObserver.observe(containerRef.current)
      return () => {
        resizeObserver.disconnect()
      }
    }
    return () => {}
  }, [])

  // useEffect(() => {
  //   if (currentPage === 'connect') setWidth(250)
  //   if (currentPage === 'connectOptions') setWidth(280)
  // }, [currentPage])

  return (
    <motion.div
      initial={{
        scale: 0.97
      }}
      animate={{
        scale: 1,
        height
      }}
      transition={{
        duration: 0.1,
        ease: 'linear'
      }}
      exit={{
        scale: 0.97
      }}
      style={{ height }}
      onClick={(e) => e.stopPropagation()}
      className={styles.dialogContent}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  )
}
