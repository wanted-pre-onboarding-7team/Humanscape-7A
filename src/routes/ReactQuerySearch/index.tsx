import SEO from 'components/Seo'
import SearchInput from 'components/Search/SearchInput'
import { SearchResult } from 'components/Search/SearchResult'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getOpenDiseaseAPi } from 'services/disease'
import { useSearchFn } from 'hooks/useSearch'

const ReactQuery = () => {
  const [searchParams] = useSearchParams()
  const currentSearch = searchParams.get('search')
  const search = useSearchFn({ param: currentSearch }) // 인터페이스와 이름같아야함

  return (
    <div>
      <SEO title='ReactQuery' />
      <SearchInput />
      <SearchResult data={search} />
    </div>
  )
}
export default ReactQuery
