import cx from 'classnames'
import styles from './ResultItem.module.scss'

import { SearchIcon } from 'assets/svgs'
import { keyDownIndexState, searchState } from 'states/disease'
import { useRecoilValue } from 'recoil'
import { highLightText } from './utils'

interface ResultItemProp {
  name: string
  index: number
}

export const ResultItem = ({ name, index }: ResultItemProp) => {
  const selectedIndex = useRecoilValue(keyDownIndexState)
  const highLight = useRecoilValue(searchState)

  return (
    <li className={cx(styles.item, { [styles.selectedItem]: selectedIndex === index })}>
      <SearchIcon />
      {name}
      <span>{highLightText(name, highLight)}</span>
    </li>
  )
}
