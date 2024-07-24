import SwitchIcon from '../../icons/SwitchIcon'
import SwicthAccountDropdown from '../SwicthAccountDropdown'

import { useEffect, useState } from 'react'
import { useModalContext } from '../ModalProvider'
import styles from './styles.css'
import { useWindowSize } from '../../hooks/useWindowSize'
import { breakpoints } from '../../theme/breakpoints'
import { usePageContext } from '../../pages/PageProvider'

export default function SwitchAccount() {
  const [isOpen, setIsOpen] = useState(false)
  const modalContext = useModalContext()

  const { width: screenWidth } = useWindowSize()
  const { pushPage } = usePageContext()

  useEffect(() => {
    if (!modalContext.open) setIsOpen(false)
  }, [modalContext.open, screenWidth])

  return (
    <SwicthAccountDropdown
      open={isOpen}
      onClose={() => setIsOpen(false)}
      selectOnClose
    >
      <div
        className={styles.indicator}
        onClick={() => {
          if ((screenWidth || window.innerWidth) >= breakpoints.large) {
            setIsOpen(!isOpen)
          } else {
            pushPage('switchAccountList')
          }
        }}
      >
        <SwitchIcon />
      </div>
    </SwicthAccountDropdown>
  )
}
