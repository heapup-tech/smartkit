import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { cn } from '@/lib/utils'
import AppHeader from '@/components/app-header'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartKit',
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
          'min-h-screen bg-background antialiased  dark:bg-grid-white/[0.03] bg-grid-black/[0.03]',
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Providers>
            <AppHeader />
            {children}
          </Providers>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
