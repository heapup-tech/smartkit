import { RemoveScroll } from 'react-remove-scroll'
import Portal from '../Portal'
import ThemeContainer from '../ThemeContainer'
import Overlay from './Overlay'
import Content from './Content'

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
              <Overlay>
                <Content>
                  <div onClick={onClose}>×</div>
                  <div>{children}</div>
                </Content>
              </Overlay>
            </ThemeContainer>
          </Portal>
        </RemoveScroll>
      )}
    </>
  )
}
