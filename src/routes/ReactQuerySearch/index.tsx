import SEO from 'components/Seo'
import { useSearchParams } from 'react-router-dom'

const ReactQuery = () => {
  const [searchParams] = useSearchParams()

  const currentSearch = searchParams.get('search')

  return (
    <div>
      <SEO title='ReactQuery' />
    </div>
  )
}
export default ReactQuery
