import { createContext, useContext, useEffect, useState } from 'react'
import About from './About'
import ConnectOptions from './ConnectOptions'
import Connect from './Connect'
import { useAccount, Wallet } from '@heapup/smartkit-hooks'
import Profile from './Profile'
import { useModalContext } from '../components/ModalProvider'
import SwitchAccountList from './SwitchAccountList'

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
  profile: <Profile />,
  switchAccountList: <SwitchAccountList />
} as const

export function PageProvider({ children }: React.PropsWithChildren<{}>) {
  const { isConnected } = useAccount()
  const { open } = useModalContext()

  const [currentPage, setCurrentPage] = useState<PageName>('connectOptions')
  const [selectedWallet, setSelectedWallet] = useState<Wallet | undefined>(
    undefined
  )
  const [prevPage, setPrevPage] = useState<PageName | null>(null)
  const { closeModal } = useModalContext()

  const pushPage = (page: PageName) => {
    if (currentPage === 'connectOptions' || currentPage === 'profile') {
      setPrevPage(currentPage)
      setCurrentPage(page)
    }
  }

  const popPage = () => {
    if (currentPage === 'connectOptions') return
    else if (
      currentPage === 'connect' ||
      currentPage === 'about' ||
      currentPage === 'profile'
    ) {
      setCurrentPage('connectOptions')
      setPrevPage(null)
    } else if (currentPage === 'switchAccountList') {
      setCurrentPage('profile')
      setPrevPage(null)
    }
  }

  useEffect(() => {
    if (isConnected) {
      prevPage !== null && closeModal()
      setCurrentPage('profile')
      setPrevPage(null)
    } else {
      setCurrentPage('connectOptions')
      setPrevPage(null)
    }
  }, [isConnected])

  useEffect(() => {
    if (open) return
    if (currentPage === 'switchAccountList') {
      setCurrentPage('profile')
      setPrevPage(null)
    }
    if (currentPage === 'connect') {
      setCurrentPage('connectOptions')
      setPrevPage(null)
    }
  }, [open])

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
