'use client'

import { Button } from '@/components/ui/button'
import Hero from '@/components/hero'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/Spotlight'
import Features from '@/components/features'

export default function Home() {
  return (
    <main className="container relative mt-12 md:mt-32 mb-20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex justify-center flex-col items-center gap-y-16">
        <div className="flex items-center flex-wrap flex-col md:flex-row justify-center md:justify-between w-full">
          <div className="text-red font-semibold text-6xl  text-center md:text-left">
            <div className="text-3xl md:text-6xl bg-clip-text bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-transparent">
              SmartKit
            </div>
            <div className="text-base md:text-lg font-medium mt-2">
              Connect to the sui network in a simple way
            </div>
            <Link href="/docs">
              <Button
                className="mt-4 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-lg px-4 text-white"
                size="lg"
              >
                Get Start
              </Button>
            </Link>
          </div>

          <Hero />
        </div>

        <Features />
      </div>
    </main>
  )
}
