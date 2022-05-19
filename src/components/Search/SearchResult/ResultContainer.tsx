import styles from './SearchResult.module.scss'
import { SusLoding } from 'components/Loading/SusLoding'
import { ResultItem } from './ResultItem'
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
            data.item.map((item, index) => <ResultItem key={item.sickCd} index={index} name={item.sickNm} />)}
        </ul>
      </div>
    </div>
  )
}
