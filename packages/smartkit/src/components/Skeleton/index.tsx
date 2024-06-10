import { motion } from 'framer-motion'
import { SkeletonStyle } from './styles.css'

export default function Skeleton({
  className,
  ...props
}: Partial<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...props}
      className={className}
      style={{ overflow: 'hidden', height: '100%' }}
    >
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: [0.4, 0, 0.6, 1]
        }}
        className={SkeletonStyle}
      />
    </div>
  )
}
