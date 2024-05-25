'use client'

import * as React from 'react'
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'

interface CopyButtonProps extends ButtonProps {
  value: string
  src?: string
}

export function CopyButton({
  className,
  value,
  src,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [copied])

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        'relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:size-3',
        className
      )}
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(value)
          setCopied(true)
        }
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
