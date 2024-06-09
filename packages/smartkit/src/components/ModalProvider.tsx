import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface ModalContextValue {
  open: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(true)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <ModalContext.Provider
      value={{
        open,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('Can not find ModalProvider')
  }

  return context
}
