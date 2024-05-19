import { usePageContext } from '../PageProvider'

export default function About() {
  const pageContext = usePageContext()
  return (
    <div>
      <button
        onClick={() => {
          pageContext.setCurrentPage('connectOptions')
        }}
      >
        goback
      </button>
    </div>
  )
}
