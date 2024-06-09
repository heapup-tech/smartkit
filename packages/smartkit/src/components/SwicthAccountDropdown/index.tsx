import { AnimatePresence, motion, Variants } from 'framer-motion'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import Portal from '../Portal'
import ThemeContainer from '../ThemeContainer'
import { RemoveScroll } from 'react-remove-scroll'
import AccountList from '../AccountList'

interface DropdownProps {
  open: boolean
  onClose: () => void
  selectOnClose: boolean
}

const dropdownVariants: Variants = {
  collapsed: {
    transformOrigin: '0 0',
    opacity: 0,
    scale: 0.96,
    z: 0.01,
    y: -4,
    x: 0,
    transition: {
      duration: 0.1
    }
  },
  open: {
    transformOrigin: '0 0',
    willChange: 'opacity,transform',
    opacity: 1,
    scale: 1,
    z: 0.01,
    y: 0,
    x: 0,
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.15
    }
  }
}

export default function Dropdown({
  children,
  open,
  onClose,
  selectOnClose = false
}: PropsWithChildren<DropdownProps>) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleSelect = () => {
    if (selectOnClose) onClose()
  }

  useEffect(() => {
    if (!triggerRef.current) return

    const rect = triggerRef.current.getBoundingClientRect()

    setOffset({ x: rect.left - 5, y: rect.top + rect.height + 8 })
  }, [triggerRef.current])

  useEffect(() => {
    window.addEventListener('scroll', onClose)
    window.addEventListener('resize', onClose)
    return () => {
      window.removeEventListener('scroll', onClose)
      window.removeEventListener('resize', onClose)
    }
  }, [])

  return (
    <>
      <div ref={triggerRef}>{children}</div>
      <AnimatePresence>
        {open && (
          <RemoveScroll>
            <Portal>
              <ThemeContainer>
                <motion.div
                  style={{
                    position: 'fixed',
                    zIndex: 2147483647,
                    inset: 0
                  }}
                >
                  <div
                    style={{ position: 'absolute', inset: 0 }}
                    onClick={onClose}
                  ></div>
                  <motion.div
                    variants={dropdownVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    style={{
                      position: 'absolute',
                      left: offset.x,
                      top: offset.y
                    }}
                  >
                    <AccountList onSelect={handleSelect} />
                  </motion.div>
                </motion.div>
              </ThemeContainer>
            </Portal>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </>
  )
}
