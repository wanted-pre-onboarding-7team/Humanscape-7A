import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { clickItemState } from 'states/disease'
import { useRecoilState, useSetRecoilState } from 'recoil'

import useKeyUpDown from 'hooks/keyPress/useKeyUpDown'
import useDebounce from 'hooks/useDebounce'

import styles from './SearchInput.module.scss'
import { SearchIcon } from 'assets/svgs/index'
import { keyDownIndexState } from 'services/keypress'

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState('')
  const setKeyDownIndex = useSetRecoilState(keyDownIndexState)
  const [clickState, setClickState] = useRecoilState(clickItemState)

  const { onKeyDown } = useKeyUpDown()

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
    setClickState('')
    setKeyDownIndex(-1)
  }

  useDebounce(searchWord, 500)

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    setSearchWord(clickState)
  }, [clickState])

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
