import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
import useSetSearchState from 'hooks/useSetSearchState'

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  // const [, setSearchParams] = useSearchParams()
  const setSearchState = useSetSearchState('searchText')

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setSearchState(value)
      // setSearchParams({ searchText: value })
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounceValue
}

export default useDebounce
