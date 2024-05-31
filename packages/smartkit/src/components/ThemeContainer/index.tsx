import { useThemeContext } from '../ThemeProvider'
export default function ThemeContainer({
  children
}: {
  children: React.ReactNode
}) {
  const { theme } = useThemeContext()

  return <div {...{ [`data-theme-${theme}`]: '' }}>{children}</div>
}
