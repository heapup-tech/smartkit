import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { cn } from '@/lib/utils'
import AppHeader from '@/components/app-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'smartkit',
  description: 'Connect to the Sui network in a simple way'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <Providers>
          <AppHeader />
          {children}
        </Providers>
      </body>
    </html>
  )
}
