import { AnimatePresence, motion, Variants } from 'framer-motion'
import { usePageContext } from '../../pages/PageProvider'
import styles from './styles.css'
import { PropsWithChildren } from 'react'

const pageAnims: Variants = {
  fadeInScaleUpInitial: {
    scale: 0.97,
    opacity: 0
  },
  final: {
    scale: 1,
    opacity: 1
  },
  fadeOutScaleUpFinal: {
    scale: 1.03,
    opacity: 0
  }
}

const Page = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>
}

export function PageContainer() {
  const { currentPage, pages } = usePageContext()
  const prevPage = 'ss'

  return (
    <div className={styles.pageContainer}>
      {Object.keys(pages).map((key) => {
        const page = pages[key]
        return (
          <AnimatePresence>
            {currentPage === key && (
              <motion.div
                variants={pageAnims}
                initial={
                  prevPage ? 'fadeOutScaleUpFinal' : 'fadeInScaleUpInitial'
                }
                animate={'final'}
                exit={'fadeOutScaleUpFinal'}
                transition={{ duration: 0.15, ease: 'linear' }}
              >
                <Page>{page}</Page>
              </motion.div>
            )}
          </AnimatePresence>
        )
      })}
    </div>
  )
}
