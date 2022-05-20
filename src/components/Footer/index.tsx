import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.ftContainer}>
      <h3 className={styles.ftTitle}>wanted-pre-onboarding-7team / Humanscape-7A</h3>
      <ul className={styles.ftList}>
        <li>남효현</li>
        <li>배수인</li>
        <li>설혜린</li>
        <li>이득규</li>
        <li>한지선</li>
      </ul>
    </div>
  )
}

export default Footer
