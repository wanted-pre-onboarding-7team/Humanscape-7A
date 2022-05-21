import cx from 'classnames'
import styles from './ResultItem.module.scss'

import useItemResult from 'hooks/useItemResult'

import { useCallback, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { keyDownIndexState, selectedValueState } from 'services/keypress'
import { searchState } from 'states/disease'

import { highLightText } from './utils'

import { SearchIcon } from 'assets/svgs'

interface ResultItemProp {
  name: string
  index: number
}

export const ResultItem = ({ name, index }: ResultItemProp) => {
  const selectedIndex = useRecoilValue(keyDownIndexState)
  const highLight = useRecoilValue(searchState)
  const selectedIndexValue = useSetRecoilState(selectedValueState)

  const { handleItemClick } = useItemResult()

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
