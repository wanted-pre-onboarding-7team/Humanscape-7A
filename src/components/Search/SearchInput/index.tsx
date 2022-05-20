import { ChangeEvent, FormEvent, KeyboardEvent, useCallback, useState } from 'react'
import { searchState, keyDownIndexState, searchResultState } from 'states/disease'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import useKeyUpDown from 'hooks/keyPress/useKeyUpDown'
import useDebounce from 'hooks/useDebounce'

import { SearchIcon } from 'assets/svgs/index'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState('')
  const setKeyDownIndex = useSetRecoilState(keyDownIndexState)

  const { onKeyDown } = useKeyUpDown()
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
    setKeyDownIndex(0)
  }

  useDebounce(searchWord, 500)

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
