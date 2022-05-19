import SEO from 'components/Seo'
import SearchInput from 'components/Search/SearchInput'
import { SearchResult } from 'components/Search/SearchResult'
import { useSearchParams } from 'react-router-dom'
import { getOpenDiseaseAPi } from 'services/disease'
import { useQuery } from 'react-query'

const ReactQuery = () => {
  const [searchParams] = useSearchParams()

  const currentSearch = searchParams.get('search')

  const { isLoading, data } = useQuery(
    ['getDiseaseAPi', currentSearch],
    () => getOpenDiseaseAPi({ searchText: currentSearch }).then((res) => res.data.response.body.items),
    {
      // 쿼리가 없는 경우
      enabled: !!currentSearch,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )
  if (!data) return <SearchInput />

  return (
    <div>
      <SEO title='ReactQuery' />
      <SearchInput />
      <SearchResult data={data} />
    </div>
  )
}
export default ReactQuery
