import styles from './SearchResult.module.scss'
import { SearchIcon } from 'assets/svgs/index'

import useSearchValue from 'hooks/useSearchValue'

<<<<<<< HEAD
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { IDiseaseAPIRep, Items } from 'types/disease'

interface ISearchResultProp {
  data: Items | null | undefined
}

export const SearchResult = ({ data }: ISearchResultProp) => {
  if (!data) return null
=======
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

>>>>>>> 4c062fa45a275e2816c4532c8ad4a82e70a02f64
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <span className={styles.resultTitle}>추천 검색어</span>
        <ul className={styles.scrollBox}>
<<<<<<< HEAD
          {Array.isArray(data.item) &&
            data.item.map((item) => {
              return (
                <li key={item.sickCd} className={styles.item}>
                  <SearchIcon />
                  {item.sickNm}
                </li>
              )
            })}
=======
          {data.map((item) => {
            return (
              <li key={item.sickCd} className={styles.item}>
                <SearchIcon />
                {item.sickNm}
              </li>
            )
          })}
>>>>>>> 4c062fa45a275e2816c4532c8ad4a82e70a02f64
        </ul>
      </div>
    </div>
  )
}
