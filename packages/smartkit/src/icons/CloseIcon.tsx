import { motion } from 'framer-motion'
import { MotionIconProps } from './types'

export default function CloseIcon(props: MotionIconProps) {
  return (
    <motion.svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 13L13 1M1 1L13 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}
