import { motion } from 'framer-motion'
import styles from './styles.css'

const WalletOption = () => {
  return <motion.button className={styles.walletButton}></motion.button>
}

export default function WalletOptions() {
  return (
    <motion.div>
      <WalletOption />
    </motion.div>
  )
}
