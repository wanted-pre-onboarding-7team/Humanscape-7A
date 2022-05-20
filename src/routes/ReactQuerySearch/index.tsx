import SEO from 'components/Seo'
import useQuerySearch from 'hooks/useQuerySearch'
import { SearchResult } from 'components/Search/SearchResult/ResultContainer'

const ReactQuery = () => {
  const { data } = useQuerySearch()

  return (
    <div>
      <SEO title='ReactQuery' />
      <SearchResult data={data} />
    </div>
  )
}
export default ReactQuery
