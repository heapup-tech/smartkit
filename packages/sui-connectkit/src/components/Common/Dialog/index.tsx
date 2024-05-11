import { createPortal } from 'react-dom'
import { RemoveScroll } from 'react-remove-scroll'
import * as styles from './styles.css'

// console.log(overlay)

interface DialogProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const closeIcon = () => {
  return <div>x</div>
}

export default function Dialog({ children, open, onClose }: DialogProps) {
  return (
    <>
      {open &&
        createPortal(
          <RemoveScroll>
            <div
              style={{
                background: 'red'
              }}
            >
              <div className={styles.overlay}></div>
              {children}
            </div>
          </RemoveScroll>,
          document.body
        )}
    </>
  )
}
