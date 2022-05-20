import cx from 'classnames'
import styles from './ResultItem.module.scss'

import useItemResult from 'hooks/useItemResult'

import { SearchIcon } from 'assets/svgs'
import { keyDownIndexState, clickItemState } from 'states/disease'
import { useRecoilValue, useSetRecoilState } from 'recoil'

interface ResultItemProp {
  name: string
  index: number
}

export const ResultItem = ({ name, index }: ResultItemProp) => {
  const { handleItemClick } = useItemResult()
  const selectedIndex = useRecoilValue(keyDownIndexState)

  return (
    <li
      role='presentation'
      className={cx(styles.item, { [styles.selectedItem]: selectedIndex === index })}
      value={name}
      onClick={() => handleItemClick(name)}
    >
      <SearchIcon />
      {name}
    </li>
  )
}
