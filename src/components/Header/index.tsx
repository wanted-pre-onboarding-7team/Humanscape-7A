import styles from './Header.module.scss'
import { Logo } from 'assets/svgs/index'

import { NavLink } from 'react-router-dom'
import cx from 'classnames'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                Recoil
              </NavLink>
            </li>
            <li>
              <NavLink to='/usequery' className={({ isActive }) => cx({ [styles.isActive]: isActive })} color='#2d3d50'>
                React-Query
              </NavLink>
            </li>
            <li>
              <NavLink to='/redux' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                Redux-Toolkit
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Header
