import { useState, useEffect } from 'react'
<<<<<<< HEAD

interface debounceProps {
  value: string
  delay: number
}

function useDebounce({ value, delay }: debounceProps) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [delay, value])

  return debouncedValue
=======
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
>>>>>>> 4c062fa45a275e2816c4532c8ad4a82e70a02f64
}

export default useDebounce
