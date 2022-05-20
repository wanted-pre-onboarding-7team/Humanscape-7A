import { ChangeEvent, FormEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { searchState, keyDownIndexState, clickItemState } from 'states/disease'
import { useRecoilState, useRecoilValue } from 'recoil'

import useDebounce from 'hooks/useDebounce'

import { SearchIcon } from 'assets/svgs/index'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  const [clickState, setClickState] = useRecoilState(clickItemState)
  const [searchWord, setSearchWord] = useState('')
  const [keyDownIndex, setKeyDownIndex] = useRecoilState(keyDownIndexState)

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
    setClickState('')
  }

  useDebounce(searchWord, 500)

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (clickState) {
      setSearchWord(clickState)
    }
  }, [clickState])

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return

    if (e.key === 'ArrowUp') {
      e.preventDefault()
    }

    if (e.key === 'ArrowDown') {
      console.log('너 잘되니?')
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
      <form className={styles.searchForm} onSubmit={submitHandle}>
        <div className={styles.inputBox}>
          <SearchIcon />
          <input
            placeholder='질환명을 입력해 주세요.'
            onChange={onChangeHandle}
            value={searchWord}
            onKeyDown={onKeyDown}
          />
        </div>
        <button type='submit' className={styles.searchButton}>
          검색
        </button>
      </form>
    </div>
  )
}

export default SearchInput
