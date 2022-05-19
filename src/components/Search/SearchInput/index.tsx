import { ChangeEvent, FormEvent, KeyboardEvent, useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchState, keyDownIndexState } from 'states/disease'
import { useRecoilState } from 'recoil'
import _ from 'lodash'

import useDebounce from 'hooks/useDebounce'

import { SearchIcon } from 'assets/svgs/index'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState('')
  const [keyDownIndex, setKeyDownIndex] = useRecoilState(keyDownIndexState)

  const [search, setSearch] = useRecoilState(searchState)

  const delaySetValue = useCallback(
    _.debounce((value) => {
      setSearch(value)
    }, 500),
    []
  )

  const onChangeHandle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      delaySetValue(e.target.value)
      setSearchWord(e.target.value)
    },

    [delaySetValue]
  )

  useDebounce(searchWord, 1000)

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return

    if (e.key === 'ArrowUp') {
      e.preventDefault()
    }

    if (e.key === 'ArrowDown') {
      setKeyDownIndex((prev) => prev + 1)
    }

    if (e.key === 'ArrowUp') {
      setKeyDownIndex((prev) => {
        if (prev < 0) {
          return 0
        }
        return prev - 1
      })
    }
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.title}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </div>
      <form className={styles.searchMinBox} onSubmit={submitHandle}>
        <input
          placeholder='질환명을 입력해 주세요.'
          onChange={onChangeHandle}
          value={searchWord}
          onKeyDown={onKeyDown}
        />
        <button type='submit'>
          <SearchIcon />
        </button>
      </form>
      <form className={styles.searchMaxBox} onSubmit={submitHandle}>
        <div className={styles.inputBox}>
          <SearchIcon />
          <input
            placeholder='질환명을 입력해 주세요.'
            onChange={onChangeHandle}
            value={searchWord}
            onKeyDown={onKeyDown}
          />
        </div>
        <button type='submit'>검색</button>
      </form>
    </div>
  )
}

export default SearchInput
