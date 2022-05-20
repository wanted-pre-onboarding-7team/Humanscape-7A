import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.skChasWrap}>
      <div className={styles.skChas}>
        <div className={styles.skChaseDot} />
        <div className={styles.skChaseDot} />
        <div className={styles.skChaseDot} />
        <div className={styles.skChaseDot} />
        <div className={styles.skChaseDot} />
        <div className={styles.skChaseDot} />
      </div>
    </div>
  )
}

export default Spinner
