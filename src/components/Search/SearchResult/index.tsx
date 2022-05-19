import styles from './SearchResult.module.scss'
import { SearchIcon } from 'assets/svgs/index'
import { Items } from 'types/disease'

interface ISearchResultProp {
  data: Items | null
}

export const SearchResult = ({ data }: ISearchResultProp) => {
  if (!data) return null
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <span className={styles.resultTitle}>추천 검색어</span>
        <ul className={styles.scrollBox}>
          {Array.isArray(data.item) &&
            data.item.map((item) => {
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
