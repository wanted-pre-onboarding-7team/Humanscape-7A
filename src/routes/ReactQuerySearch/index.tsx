import { useQuery } from 'react-query'

import SEO from 'components/Seo'
import { getOpenDiseaseAPi } from 'services/disease'
import useSearchValue from 'hooks/useSearchValue'
import { SearchResult } from 'components/Search/SearchResult'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getOpenDiseaseAPi } from 'services/disease'
import { useSearchFn } from 'hooks/useSearch'

const ReactQuery = () => {
<<<<<<< HEAD
  const [searchParams] = useSearchParams()
  const currentSearch = searchParams.get('search')
  const search = useSearchFn({ param: currentSearch }) // 인터페이스와 이름같아야함
=======
  const searchWord = useSearchValue('searchText', '')

  const { data, isLoading, isError } = useQuery(
    ['getDiseaseAPi', searchWord],
    () =>
      getOpenDiseaseAPi({ searchText: searchWord }).then((res) => {
        console.count('API 호출 ~ 🚀 ')
        let returnData

        if (Array.isArray(res.data.response.body.items.item)) {
          returnData = res.data.response.body.items.item
        } else if (typeof res.data.response.body.items.item === 'object') {
          returnData = [res.data.response.body.items.item]
        } else if (
          typeof res.data.response.body.items.item === 'string' ||
          res.data.response.body.items.item === undefined ||
          res.data.response.body.items.item === null
        ) {
          returnData = []
        }
        return returnData
      }),
    {
      // 쿼리가 없는 경우
      enabled: !!searchWord,
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
    }
  )
>>>>>>> 4c062fa45a275e2816c4532c8ad4a82e70a02f64

  return (
    <div>
      <SEO title='ReactQuery' />
<<<<<<< HEAD
      <SearchInput />
      <SearchResult data={search} />
=======
      <SearchResult data={data} isLoading={isLoading} isError={isError} />
>>>>>>> 4c062fa45a275e2816c4532c8ad4a82e70a02f64
    </div>
  )
}
export default ReactQuery
