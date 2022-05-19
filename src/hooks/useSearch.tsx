import { useQuery } from 'react-query'
import { getOpenDiseaseAPi } from 'services/disease'

interface searchParams {
  param: string | null
}

export function useSearchFn({ param }: searchParams) {
  const { data } = useQuery(
    ['getDiseaseAPi', param],
    () => getOpenDiseaseAPi({ searchText: param }).then((res) => res.data.response.body.items),
    {
      // 쿼리가 없는 경우
      enabled: !!param,
      staleTime: Infinity,
      cacheTime: 6 * 60 * 24,
    }
  )

  return data
}
