import SEO from 'components/Seo'
import SearchInput from 'components/Search/SearchInput'
import { SearchResult } from 'components/Search/SearchResult'
import { getOpenDiseaseAPi } from 'services/disease'
import { useQuery } from 'react-query'
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
