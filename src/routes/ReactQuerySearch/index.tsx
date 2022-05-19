import { useQuery } from 'react-query'

import SEO from 'components/Seo'
import { useSearchParams } from 'react-router-dom'

import { getOpenDiseaseAPi } from 'services/disease'

// import { useSearchParams } from 'react-router-dom'
import useSearchValue from 'hooks/useSearchValue'

const ReactQuery = () => {
  const [searchParams] = useSearchParams()
  const currentSearch = searchParams.get('search')
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

  return (
    <div>
      <SEO title='ReactQuery' />
      <SearchInput />
      <SearchResult data={data} isLoading={isLoading} isError={isError} />
    </div>
  )
}
export default ReactQuery
