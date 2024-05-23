import styles from './styles.css'
export default function Avatar({ address }: { address?: string }) {
  const gradientStart = address?.slice(2, 8)
  const gradientEnd = address?.slice(address.length - 6, address.length)
  return (
    <div
      style={{
        background: `linear-gradient(#${gradientStart}, #${gradientEnd})`
      }}
      className={styles.avatar}
    />
  )
}
