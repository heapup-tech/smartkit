import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ children }: { children: React.ReactNode }) {
  const ref = useRef<Element>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!ref.current) {
      const div = document.createElement('div')
      // TODO add version
      div.setAttribute('data-smartkit-version', '1.0.0')
      document.body.appendChild(div)
      ref.current = div
    }
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}
