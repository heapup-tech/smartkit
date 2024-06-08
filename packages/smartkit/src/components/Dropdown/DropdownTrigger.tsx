import { Children, forwardRef, PropsWithChildren, useMemo } from 'react'

export interface DropdownTriggerProps {
  children?: React.ReactNode
}

function DropdownTrigger({ children }: PropsWithChildren) {
  const child = useMemo(() => {
    if (typeof children === 'string') return <p>{children}</p>
    return Children.only(children)
  }, [children])
  return <div>{child}</div>
}

export default forwardRef<'button', DropdownTriggerProps>(DropdownTrigger)
