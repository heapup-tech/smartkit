import styles from './style.css'

export function NoWalletTip() {
  return (
    <a
      href="https://sui.directory/?_project_type=wallet"
      target="_blank"
      className={styles.link}
    >
      <div className={styles.noWalletTipContainer}>I don't have a wallet?</div>
    </a>
  )
}
