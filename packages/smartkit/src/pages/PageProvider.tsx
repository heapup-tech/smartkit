import { createContext, useContext, useEffect, useState } from 'react'
import About from './About'
import ConnectOptions from './ConnectOptions'
import Connect from './Connect'
import { useAccount, Wallet } from '@heapup/smartkit-hooks'
import Profile from './Profile'

type PageName = keyof typeof pages
type PageProviderContext = {
  prevPage: PageName | null
  currentPage: PageName
  selectedWallet?: Wallet
  setSelectedWallet: (wallet: Wallet) => void
  pages: { [key: string]: React.ReactNode }
  pushPage: (page: PageName) => void
  popPage: () => void
}

const PageContext = createContext<PageProviderContext | null>(null)

const pages = {
  connectOptions: <ConnectOptions />,
  about: <About />,
  connect: <Connect />,
  profile: <Profile />
} as const

export function PageProvider({ children }: React.PropsWithChildren<{}>) {
  const { isConnected } = useAccount()

  const [currentPage, setCurrentPage] = useState<PageName>('connectOptions')
  const [selectedWallet, setSelectedWallet] = useState<Wallet | undefined>(
    undefined
  )
  const [prevPage, setPrevPage] = useState<PageName | null>(null)

  const pushPage = (page: PageName) => {
    if (currentPage === 'connectOptions') {
      setPrevPage(currentPage)
      setCurrentPage(page)
    }
  }

  const popPage = () => {
    if (currentPage === 'connectOptions') return
    else if (currentPage === 'connect' || currentPage === 'about') {
      setCurrentPage('connectOptions')
      setPrevPage(null)
    }
  }

  useEffect(() => {
    if (isConnected) setCurrentPage('profile')
    else setCurrentPage('connectOptions')
  }, [isConnected])

  return (
    <PageContext.Provider
      value={{
        pages,
        prevPage,
        currentPage,
        selectedWallet,
        setSelectedWallet,
        pushPage,
        popPage
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('PageProvider must be used within a SmartKitProvider')
  }
  return context
}
