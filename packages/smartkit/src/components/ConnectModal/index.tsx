import ConnectOptions from '../ConnectOptions'
import Dialog from '../Dialog'
import { useSmartKitContext } from '../SmartKitProvider'

export function ConnectModal() {
  const smartKitContext = useSmartKitContext()
  return (
    <Dialog
      open={smartKitContext.open}
      onClose={() => {
        smartKitContext.setOpen(false)
      }}
    >
      <ConnectOptions />
    </Dialog>
  )
}
