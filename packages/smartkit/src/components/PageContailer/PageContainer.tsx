import { usePageContext } from '../../pages/PageProvider'
import styles from './styles.css'
import { PropsWithChildren, useEffect, useState } from 'react'
import PageHeader from './PageHeader'

// const pageAnims: Variants = {
//   enter: {
//     // scale: 0.97,
//     opacity: 0
//   },
//   center: {
//     // scale: 1,
//     opacity: 1
//   },
//   exit: {
//     // scale: 1.03,
//     opacity: 0
//   }
// }

const Page = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>
}

export function PageContainer() {
  const { currentPage, pages, prevPage, selectedWallet } = usePageContext()
  const [pageHeaderLabel, setPageHeaderLabel] =
    useState<string>('Connect Wallet')

  useEffect(() => {
    if (currentPage === 'connectOptions') setPageHeaderLabel('Connect Wallet')
    else if (currentPage === 'profile') setPageHeaderLabel('Connected')
    else if (currentPage === 'connect')
      setPageHeaderLabel(selectedWallet?.name || 'Connect')
    else if (currentPage === 'switchAccountList')
      setPageHeaderLabel('Switch Account')
  }, [currentPage, selectedWallet])

  return (
    <div className={styles.pageContainer}>
      <PageHeader
        label={pageHeaderLabel}
        backable={!!prevPage && currentPage !== 'profile'}
      />
      <div className={styles.pageContent}>
        {Object.keys(pages).map((key) => {
          const page = pages[key]
          return (
            <div key={key}>
              {currentPage === key ? <Page>{page}</Page> : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
