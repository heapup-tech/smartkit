import { AnimatePresence, motion, Variants } from 'framer-motion'
import { usePageContext } from '../../pages/PageProvider'
import styles from './styles.css'
import { PropsWithChildren, useEffect, useState } from 'react'
import PageHeader from './PageHeader'

const pageAnims: Variants = {
  enter: {
    scale: 0.97,
    opacity: 0
  },
  center: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 1.03,
    opacity: 0
  }
}

const Page = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>
}

export function PageContainer() {
  const { currentPage, pages, prevPage, selectedWallet } = usePageContext()
  const [pageHeaderLabel, setPageHeaderLabel] =
    useState<string>('Connect Wallet')

  useEffect(() => {
    if (currentPage === 'connectOptions') setPageHeaderLabel('Connect Wallet')
    else if (currentPage === 'connect')
      setPageHeaderLabel(selectedWallet?.name || 'Connect')
    else if (currentPage === 'profile') setPageHeaderLabel('Connected')
  }, [currentPage, selectedWallet])

  return (
    <div className={styles.pageContainer}>
      <PageHeader
        label={pageHeaderLabel}
        backable={!!prevPage && currentPage !== 'profile'}
      />
      <AnimatePresence>
        {Object.keys(pages).map((key) => {
          const page = pages[key]

          return (
            <>
              {currentPage === key ? (
                <motion.div
                  key={key}
                  variants={pageAnims}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.1, ease: 'linear' }}
                >
                  <Page>{page}</Page>
                </motion.div>
              ) : null}
            </>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
