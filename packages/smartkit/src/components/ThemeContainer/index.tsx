import { useSmartKitContext } from '../SmartKitProvider'

export default function ThemeContainer({
  children
}: {
  children: React.ReactNode
}) {
  const { theme } = useSmartKitContext()
  console.log(theme)

  return <div {...{ [`data-theme-${theme}`]: '' }}>{children}</div>
}
