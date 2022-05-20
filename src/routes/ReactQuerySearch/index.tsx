import SEO from 'components/Seo'
import { SearchResult } from 'components/Search/SearchResult'
import useQuerySearch from 'hooks/useQuerySearch'

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
