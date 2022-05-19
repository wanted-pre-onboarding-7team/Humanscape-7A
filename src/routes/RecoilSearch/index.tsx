import { SearchResult } from 'components/Search/SearchResult/ResultContainer'
import SEO from 'components/Seo'

import { useRecoilValue } from 'recoil'
import { searchResultState } from 'states/disease'

const RecoilSearch = () => {
  const searchResult = useRecoilValue(searchResultState)

  return (
    <div>
      <SEO title='recoil' />
      <SearchResult data={searchResult} />
    </div>
  )
}

export default RecoilSearch
