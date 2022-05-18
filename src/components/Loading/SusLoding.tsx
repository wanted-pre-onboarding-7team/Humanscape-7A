import styles from './SusLoading.module.scss'

interface SuSLoding {
  content: string
}

export const SusLoding = ({ content }: SuSLoding) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>{content}</div>
    </div>
  )
}
