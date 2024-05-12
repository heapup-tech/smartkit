import { useState } from 'react'
import { ConnectModal } from '../ConnectModal'
import { useSmartKitContext } from '../SmartKitProvider'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
  showAvatar?: boolean
  mode: 'light' | 'dark'
}

export function ConnectButton({
  label = 'Connect',
  showBalance = true,
  showAvatar = true
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>{label}</button>

      <ConnectModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
