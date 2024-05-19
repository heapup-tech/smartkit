import { AnimatePresence, motion, Variants } from 'framer-motion'
import { usePageContext } from '../../pages/PageProvider'

const pageAnims: Variants = {
  fadeInScaleUpInitial: {
    scale: 0.8,
    opacity: 0
  },
  fadeInScaleUpFinal: {
    scale: 1,
    opacity: 1
  },
  fadeOutScaleUpInitial: {
    scale: 1,
    opacity: 1
  },
  fadeOutScaleUpFinal: {
    scale: 1.2,
    opacity: 0
  }
}

export function PageContainer() {
  const { currentPage, pages } = usePageContext()
  // console.log(pageContext.pages)

  const prevPage = 'connectOptions'

  return (
    <div>
      {Object.keys(pages).map((key) => {
        const page = pages[key]
        return (
          <AnimatePresence key={key}>
            {currentPage === key && (
              <motion.div
                layout
                variants={pageAnims}
                initial={
                  prevPage ? 'fadeOutScaleUpFinal' : 'fadeInScaleUpInitial'
                }
                animate={{ scale: 1, opacity: 1 }}
                exit={'fadeOutScaleUpFinal'}
                transition={{ duration: 0.15, ease: 'linear' }}
              >
                {page}
              </motion.div>
            )}
          </AnimatePresence>
        )
      })}
    </div>
  )
}
