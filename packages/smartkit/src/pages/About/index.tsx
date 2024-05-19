import { usePageContext } from '../PageProvider'

export default function About() {
  const pageContext = usePageContext()
  return (
    <div>
      <button
        onClick={() => {
          pageContext.popPage()
        }}
      >
        goback
      </button>
    </div>
  )
}
