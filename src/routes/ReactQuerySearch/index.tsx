import SEO from 'components/Seo'
import SearchInput from 'components/Search/SearchInput'
import { SearchResult } from 'components/Search/SearchResult'

import { getOpenDiseaseAPi } from 'services/disease'

import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'

const ReactQuery = () => {
  const [searchParams] = useSearchParams()
  const currentSearch = searchParams.get('searchText')

  const { isLoading, data } = useQuery(
    ['getDiseaseAPi', currentSearch],
    () =>
      getOpenDiseaseAPi({ searchText: currentSearch }).then((res) => {
        console.count('React Quert API 호출 ~ 🚀')
        return res.data.response.body.items
      }),
    {
      // 쿼리가 없는 경우
      enabled: !!currentSearch,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )

  return (
    <div>
      <SEO title='ReactQuery' />
      <SearchInput />
      <SearchResult data={data} />
    </div>
  )
}
export default ReactQuery
