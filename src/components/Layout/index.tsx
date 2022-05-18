import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
