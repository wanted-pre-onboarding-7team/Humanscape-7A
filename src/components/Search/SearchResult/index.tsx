import styles from './SearchResult.module.scss'
import { SearchIcon } from 'assets/svgs/index'

import useSearchValue from 'hooks/useSearchValue'

interface ISearchResultProp {
  data: any[] | undefined
  isLoading: boolean
  isError: boolean
}

export const SearchResult = ({ data, isLoading, isError }: ISearchResultProp) => {
  const searchWord = useSearchValue('searchText', '')
  if (searchWord === '') return null

  if (data === undefined || data.length === 0) {
    return (
      <div className={styles.resultContainer}>
        <div className={styles.resultBox}>
          <span className={styles.resultTitle}>검색 결과가 없습니다</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <span className={styles.resultTitle}>추천 검색어</span>
        <ul className={styles.scrollBox}>
          {data.map((item) => {
            return (
              <li key={item.sickCd} className={styles.item}>
                <SearchIcon />
                {item.sickNm}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
