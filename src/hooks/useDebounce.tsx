import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  const [, setSearchParams] = useSearchParams()

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setSearchParams({ searchText: value })
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounceValue
}

export default useDebounce
