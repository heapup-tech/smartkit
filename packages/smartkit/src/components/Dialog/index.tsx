import { RemoveScroll } from 'react-remove-scroll'
import * as styles from './styles.css'
import { motion } from 'framer-motion'
import Portal from '../Portal'
import ThemeContainer from '../ThemeContainer'

interface DialogProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

export default function Dialog({ children, open, onClose }: DialogProps) {
  return (
    <>
      {open && (
        <RemoveScroll>
          <Portal>
            <ThemeContainer>
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}
              >
                <div onClick={onClose}>×</div>
                <div
                  style={{
                    background: 'white'
                  }}
                >
                  {children}
                </div>
              </motion.div>
            </ThemeContainer>
          </Portal>
        </RemoveScroll>
      )}
    </>
  )
}
