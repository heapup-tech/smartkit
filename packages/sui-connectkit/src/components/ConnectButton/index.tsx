import React, { useContext, useEffect, useState } from 'react'

export interface ConnectButtonProps {
  label?: string
  showBalance?: boolean
  showAvatar?: boolean
  mode: 'light' | 'dark'
}

export function ConnectButton({
  label = 'Connect',
  showBalance = true,
  showAvatar = true,
  mode = 'light'
}) {
  return <div>{label}</div>
}
