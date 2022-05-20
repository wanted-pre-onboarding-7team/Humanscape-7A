import { useQuery } from 'react-query'

import SEO from 'components/Seo'
import { getOpenDiseaseAPi } from 'services/disease'
import { SearchResult } from 'components/Search/SearchResult'
import { useRecoilValue } from 'recoil'
import { searchState } from 'states/disease'

const ReactQuery = () => {
  const search = useRecoilValue(searchState)

  const { data } = useQuery(
    ['getDiseaseAPi', search],
    () =>
      getOpenDiseaseAPi({ searchText: search }).then((res) => {
        return res.data.response.body.items
      }),
    {
      // 쿼리가 없는 경우
      enabled: !!search,
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
      suspense: true,
    }
  )

  return (
    <div>
      <SEO title='ReactQuery' />
      <SearchResult data={data} />
    </div>
  )
}
export default ReactQuery
