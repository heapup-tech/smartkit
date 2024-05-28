import Dialog from '../Dialog'
import { PageContainer } from '../PageContailer/PageContainer'
import { useSmartKitContext } from '../SmartKitProvider'

export function ConnectModal() {
  const { open, setOpen } = useSmartKitContext()

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
      }}
    >
      <PageContainer />
    </Dialog>
  )
}
