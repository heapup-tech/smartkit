import { createContext, useContext, useState } from 'react'
import About from './About'
import ConnectOptions from './ConnectOptions'

type PageName = keyof typeof pages
type PageProviderContext = {
  currentPage: string
  setCurrentPage: (page: PageName) => void
  pages: { [key: string]: React.ReactNode }
}

const PageContext = createContext<PageProviderContext | null>(null)

const pages = {
  connectOptions: <ConnectOptions />,
  about: <About />
} as const

export function PageProvider({ children }: React.PropsWithChildren<{}>) {
  const [currentPage, setCurrentPage] = useState<PageName>('connectOptions')

  return (
    <PageContext.Provider
      value={{
        pages,
        currentPage,
        setCurrentPage
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
