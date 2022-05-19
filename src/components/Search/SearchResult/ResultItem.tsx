import cx from 'classnames'
import styles from './ResultItem.module.scss'

import { SearchIcon } from 'assets/svgs'
import { keyDownIndexState } from 'states/disease'
import { useRecoilValue } from 'recoil'

interface ResultItemProp {
  name: string
  index: number
}

export const ResultItem = ({ name, index }: ResultItemProp) => {
  const selectedIndex = useRecoilValue(keyDownIndexState)

  return (
    <li className={cx(styles.item, { [styles.selectedItem]: selectedIndex === index })}>
      <SearchIcon />
      {name}
    </li>
  )
}
