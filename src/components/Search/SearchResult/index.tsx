import styles from './SearchResult.module.scss'
import { SearchIcon } from 'assets/svgs/index'

import { getOpenDiseaseAPi } from 'services/disease'

import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'

export const SearchResult = () => {
  const [searchParams] = useSearchParams()

  const currentSearch = searchParams.get('search')

  const { isLoading, data } = useQuery(
    ['getDiseaseAPi', currentSearch],
    () => getOpenDiseaseAPi({ searchText: currentSearch }).then((res) => res.data.response.body.items.item),
    {
      // 쿼리가 없는 경우
      enabled: !!currentSearch,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )

  if (currentSearch === null) return null
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <span className={styles.resultTitle}>추천 검색어</span>
        <ul className={styles.scrollBox}>
          {Array.isArray(data) &&
            data.map((item) => {
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
