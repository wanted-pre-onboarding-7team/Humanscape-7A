import { useQueryClient } from 'react-query'

const useSetClientState = (key: string) => {
  const searchState = useQueryClient()
  return (state: string) => searchState.setQueryData(key, state)
}

export default useSetClientState
