import { useState } from 'react'
import { ConnectModal } from '../ConnectModal'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
  showAvatar?: boolean
}

export function ConnectButton({
  label = 'Connect',
  showBalance = true,
  showAvatar = true
}: ConnectButtonProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>{label}</button>

      <ConnectModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
