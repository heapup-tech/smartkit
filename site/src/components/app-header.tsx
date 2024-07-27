import Link from 'next/link'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { siteConfig } from '@/config/site'
import { ConnectButton } from '@heapup/smartkit'

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-sm">
      <div className="container flex h-20 max-w-screen-2xl items-center flex-between">
        <div className="mr-4 invisible md:flex md:visible">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="invisible md:visible font-bold sm:inline-block">
              SmartKit
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs"
            >
              Docs
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <Link href={siteConfig.links.github} target="_blank">
            <div
              className={cn(
                buttonVariants({
                  variant: 'ghost'
                }),
                'w-9 px-0'
              )}
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>

          <ModeToggle />
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}
