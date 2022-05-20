import { useQuery } from 'react-query'
import { getOpenDiseaseAPi } from 'services/disease'
import { useRecoilValue } from 'recoil'
import { searchState } from 'states/disease'

const useQuerySearch = () => {
  const search = useRecoilValue(searchState)

  const { data } = useQuery(
    ['getDiseaseAPi', search],
    () =>
      getOpenDiseaseAPi({ searchText: search }).then((res) => {
        // eslint-disable-next-line no-console
        console.count('react-query API 호출')
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

  return { data }
}

export default useQuerySearch
