import { useEffect, useState } from 'react'
import { debounce } from 'radash'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined
    height: number | undefined
  }>({
    height: undefined,
    width: undefined
  })

  debounce({ delay: 500 }, () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    })
  })

  useEffect(() => {
    const handleResize = debounce({ delay: 500 }, () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      })
    })
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
