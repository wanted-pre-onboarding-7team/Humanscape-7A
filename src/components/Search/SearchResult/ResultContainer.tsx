import styles from './SearchResult.module.scss'

interface searchContainerProp {
  children: React.ReactNode
}

export const SearchContainer = ({ children }: searchContainerProp) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <span className={styles.resultTitle}>추천 검색어</span>
        <ul className={styles.scrollBox}>{children}</ul>
      </div>
    </div>
  )
}
