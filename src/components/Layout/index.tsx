import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Suspense } from 'react'
import SearchInput from 'components/Search/SearchInput'
import Spinner from 'components/Spinner'

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <SearchInput />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
