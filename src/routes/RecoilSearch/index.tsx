import { SearchResult } from 'components/Search/SearchResult'
import SEO from 'components/Seo'

import { useRecoilValue } from 'recoil'
import { searchResultState } from 'states/disease'

const RecoilSearch = () => {
  const searchResult = useRecoilValue(searchResultState)

  if (typeof searchResult !== 'string')
    return (
      <div>
        <SEO title='recoil' />
        <SearchResult data={searchResult.items} />
      </div>
    )
  return (
    <div>
      <SEO title='recoil' />
    </div>
  )
}

export default RecoilSearch
