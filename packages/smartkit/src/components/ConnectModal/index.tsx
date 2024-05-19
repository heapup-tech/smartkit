import { PageProvider } from '../../pages/PageProvider'
import Dialog from '../Dialog'
import { PageContainer } from '../PageContailer/PageContainer'
import { useSmartKitContext } from '../SmartKitProvider'

export function ConnectModal() {
  const smartKitContext = useSmartKitContext()

  return (
    <PageProvider>
      <Dialog
        open={smartKitContext.open}
        onClose={() => {
          smartKitContext.setOpen(false)
        }}
      >
        <PageContainer />
      </Dialog>
    </PageProvider>
  )
}
