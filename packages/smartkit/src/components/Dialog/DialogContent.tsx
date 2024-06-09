import { motion, Variants } from 'framer-motion'
import styles from './styles.css'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { breakpoints } from '../../theme/breakpoints'

const scaleVariants: Variants = {
  init: {
    scale: 0.97
  },
  exit: {
    scale: 0.97
  }
}

const slideUpVariants: Variants = {
  init: {
    bottom: '-100%'
  },
  exit: {
    bottom: '-100%'
  }
}

export default function DialogContent({
  children
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number | 'auto'>('auto')
  useEffect(() => {
    if (!containerRef.current) return
    const resizeObserver = new ResizeObserver((entries) => {
      const observedHeight = entries[0].contentRect.height
      setHeight(observedHeight + 48)
    })
    resizeObserver.observe(containerRef.current)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const { width: screenWidth } = useWindowSize()

  return (
    <motion.div
      variants={
        (screenWidth || window.innerWidth) >= breakpoints.large
          ? scaleVariants
          : slideUpVariants
      }
      initial="init"
      animate={{
        scale: 1,
        bottom: 0,
        height
      }}
      transition={{
        duration: 0.1,
        bottom: {
          duration: 0.2,
          ease: [0.15, 1.15, 0.6, 1]
        },
        height: {
          duration: 0.5,
          type: 'spring',
          bounce: 0.5
        }
      }}
      exit="exit"
      style={{ height }}
      onClick={(e) => e.stopPropagation()}
      className={styles.dialogContent}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  )
}
