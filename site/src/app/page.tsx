'use client'

import { Button } from '@/components/ui/button'
import { ConnectButton } from '@heapup/smartkit'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="container relative">
      <div className="flex justify-center mt-16 flex-col items-center gap-y-16">
        <div className="text-red font-semibold text-6xl text-blue-500 text-center">
          <div>Smart Kit</div>
          <div className="text-gray-500 text-lg font-medium mt-4">
            Connect to the Sui network in a simple way
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ConnectButton label="Try it out" />

          <Link href="/docs">
            <motion.div
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.97
              }}
            >
              <Button className="mt-4">View the Docs</Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  )
}
