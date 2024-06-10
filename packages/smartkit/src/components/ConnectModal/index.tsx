import Dialog from '../Dialog'
import { useModalContext } from '../ModalProvider'
import { PageContainer } from '../PageContailer/PageContainer'

export function ConnectModal() {
  const { closeModal, open } = useModalContext()

  return (
    <Dialog open={open} onClose={closeModal}>
      <PageContainer />
    </Dialog>
  )
}
