import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import useDebounce from 'hooks/useDebounce'

import { SearchIcon } from 'assets/svgs/index'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  // const [, setSearchParams] = useSearchParams()
  const [searchWord, setSearchWord] = useState('')

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value)
  }

  useDebounce(searchWord, 1000)

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.focus()
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.title}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </div>
      <form className={styles.searchMinBox} onSubmit={submitHandle}>
        <input placeholder='질환명을 입력해 주세요.' onChange={onChangeHandle} value={searchWord} />
        <button type='submit'>
          <SearchIcon />
        </button>
      </form>
      <form className={styles.searchMaxBox} onSubmit={submitHandle}>
        <div className={styles.inputBox}>
          <SearchIcon />
          <input placeholder='질환명을 입력해 주세요.' onChange={onChangeHandle} value={searchWord} />
        </div>
        <button type='submit'>검색</button>
      </form>
    </div>
  )
}

export default SearchInput
