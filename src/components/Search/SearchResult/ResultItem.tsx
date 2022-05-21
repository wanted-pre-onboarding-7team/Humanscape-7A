import cx from 'classnames'
import styles from './ResultItem.module.scss'

import useItemResult from 'hooks/useItemResult'

import { SearchIcon } from 'assets/svgs'

import { searchState } from 'states/disease'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { highLightText } from './utils'
import { keyDownIndexState, selectedValueState } from 'services/keypress'
import { useCallback, useEffect } from 'react'

interface ResultItemProp {
  name: string
  index: number
}

export const ResultItem = ({ name, index }: ResultItemProp) => {
  const { handleItemClick } = useItemResult()
  const selectedIndex = useRecoilValue(keyDownIndexState)
  const highLight = useRecoilValue(searchState)
  const selectedIndexValue = useSetRecoilState(selectedValueState)

  const updateItemValue = useCallback(
    (seletedIndex: number, currentIndex: number, value: string) => {
      if (seletedIndex === currentIndex) {
        selectedIndexValue(value)
      }
    },
    [selectedIndexValue]
  )
  useEffect(() => {
    updateItemValue(selectedIndex, index, name)
  }, [index, name, selectedIndex, selectedIndexValue, updateItemValue])

  return (
    <li
      role='presentation'
      className={cx(styles.item, { [styles.selectedItem]: selectedIndex === index })}
      onClick={() => handleItemClick(name)}
    >
      <SearchIcon />
      {highLightText(name, highLight)}
    </li>
  )
}
