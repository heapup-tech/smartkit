import { RemoveScroll } from 'react-remove-scroll'
import Portal from '../Portal'
import ThemeContainer from '../ThemeContainer'
import DialogOverlay from './DialogOverlay'
import DialogContent from './DialogContent'
import { AnimatePresence } from 'framer-motion'
import { useCallback } from 'react'
import DialogHeader from './DialogHeader'

interface DialogProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

export default function Dialog({ children, open, onClose }: DialogProps) {
  const handleDismissDialog = useCallback(() => {
    onClose()
  }, [onClose])
  return (
    <>
      <AnimatePresence>
        {open && (
          <RemoveScroll>
            <Portal>
              <ThemeContainer>
                <DialogOverlay onClose={handleDismissDialog}>
                  <DialogContent>
                    <DialogHeader onClose={handleDismissDialog} />
                    <div>{children}</div>
                  </DialogContent>
                </DialogOverlay>
              </ThemeContainer>
            </Portal>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </>
  )
}
