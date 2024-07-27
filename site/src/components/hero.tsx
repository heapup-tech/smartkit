'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Hero() {
  const { resolvedTheme } = useTheme()
  console.log(resolvedTheme)

  return (
    <div className="relative mt-20">
      <div
        style={{
          filter: 'blur(40px)',
          background: 'radial-gradient(circle, #4CA3FF 0%, #9B79FC 80%)'
        }}
        className="w-64 h-64 md:w-96 md:h-96 rounded-full"
      ></div>
      <Image
        src={
          resolvedTheme === 'dark'
            ? '/connection-modal-dark.png'
            : '/connection-modal-light.png'
        }
        alt=""
        width="380"
        height="350"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
      />
    </div>
  )
}
