import styles from './NoResult.module.scss'

interface SuSLoding {
  content: string
}

export const NoResult = ({ content }: SuSLoding) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>{content}</div>
    </div>
  )
}
