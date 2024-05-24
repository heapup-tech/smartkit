import Link from 'next/link'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './mode-toggle'

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">smartkit</span>
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
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link href="https://github.com/heapup-tech/smartkit" target="_blank">
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
        </div>
      </div>
    </header>
  )
}
