import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import pkg from '../../../package.json'

interface PortalProps {
  children: React.ReactNode
  selector?: string
}

export default function Portal({
  children,
  selector = 'smartkit'
}: PortalProps) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.getElementById(selector)
    if (!ref.current) {
      const div = document.createElement('div')
      div.setAttribute('id', selector)
      div.setAttribute('data-version', pkg.version)
      document.body.appendChild(div)
      ref.current = div
    }
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}
