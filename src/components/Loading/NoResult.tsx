import styles from './NoResult.module.scss'
import { SearchForm } from 'assets/svgs/index'

interface SuSLoding {
  content: string
}

export const SusLoding = ({ content }: SuSLoding) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <SearchForm />
        {content}
      </div>
    </div>
  )
}
