import styles from './styles.css'
export default function Avatar({
  address,
  size = 96
}: {
  address?: string
  size?: number
}) {
  if (!address) return null
  const gradientStart = address?.slice(2, 8)
  const gradientEnd = address?.slice(address.length - 6, address.length)
  return (
    <div
      style={{
        background: `linear-gradient(#${gradientStart}, #${gradientEnd})`,
        width: size,
        height: size
      }}
      className={styles.avatar}
    />
  )
}
