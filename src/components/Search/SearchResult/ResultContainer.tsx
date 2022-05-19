import styles from './SearchResult.module.scss'
import { SusLoding } from 'components/Loading/NoResult'
import { ResultItem } from './ResultItem'
import { Items } from 'types/disease'
import { useRecoilValue } from 'recoil'
import { searchState } from 'states/disease'

interface ISearchResultProp {
  data: Items | null | string | undefined
}
export const SearchResult = ({ data }: ISearchResultProp) => {
  const search = useRecoilValue(searchState)

  if (!search) return null
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
