export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
  showAvatar?: boolean
  mode: 'light' | 'dark'
}

export function ConnectButton({
  label = 'Connect'
  // showBalance = true,
  // showAvatar = true,
  // mode = 'light'
}) {
  return (
    <button
      style={
        {
          // backgroundColor: 'red'
        }
      }
    >
      {label}
    </button>
  )
}
