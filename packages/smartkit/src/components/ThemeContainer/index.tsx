import { useSmartKitContext } from '../SmartKitProvider'
export default function ThemeContainer({
  children
}: {
  children: React.ReactNode
}) {
  const { theme } = useSmartKitContext()

  return <div {...{ [`data-theme-${theme}`]: '' }}>{children}</div>
}
