import { useState, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { searchState } from 'states/disease'

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  const setSearch = useSetRecoilState(searchState)

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setSearch(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay, setSearch])

  return debounceValue
}

export default useDebounce
