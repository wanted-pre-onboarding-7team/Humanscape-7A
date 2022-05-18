import styles from './SearchResult.module.scss'
import { SearchIcon } from 'assets/svgs/index'
import { SusLoding } from 'components/Loading/SusLoding'
import { Items } from 'types/disease'

interface ISearchResultProp {
  data: Items | null | string
}
export const SearchResult = ({ data }: ISearchResultProp) => {
  if (!data) return <SusLoding content='검색 결과가 없습니다.' />
  if (typeof data === 'string') return <SusLoding content={data} />
  if (!Array.isArray(data.item) && typeof data.item === 'object') return <SusLoding content={data.item.sickNm} />

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
