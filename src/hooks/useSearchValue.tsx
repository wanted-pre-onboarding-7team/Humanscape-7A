import { useQuery } from 'react-query'

const useSearchValue = (key: string, initialData: '') =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data

export default useSearchValue
