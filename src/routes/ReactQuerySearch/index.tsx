import SEO from 'components/Seo'
import SearchInput from 'components/Search/SearchInput'
import { SearchResult } from 'components/Search/SearchResult'

const ReactQuery = () => {
  return (
    <div>
      <SEO title='ReactQuery' />
      <SearchInput />
      <SearchResult />
    </div>
  )
}
export default ReactQuery
