import cx from 'classnames'
import styles from './ResultItem.module.scss'

import useItemResult from 'hooks/useItemResult'

import { SearchIcon } from 'assets/svgs'

import { searchState } from 'states/disease'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { highLightText } from './utils'
import { keyDownIndexState, selectedValueState } from 'services/keypress'
import { useCallback, useEffect } from 'react'
import { useMounted } from 'hooks'

interface ResultItemProp {
  name: string
  index: number
}

export const ResultItem = ({ name, index }: ResultItemProp) => {
  const { handleItemClick } = useItemResult()
  const selectedIndex = useRecoilValue(keyDownIndexState)
  const highLight = useRecoilValue(searchState)
  const selectedIndexValue = useSetRecoilState(selectedValueState)

  const test = useCallback(
    (a: number, b: number, c: string) => {
      if (a === b) {
        selectedIndexValue(c)
      }
    },
    [name, selectedIndexValue]
  )
  useEffect(() => {
    test(selectedIndex, index, name)
  }, [index, name, selectedIndex, test])

  return (
    <li
      role='presentation'
      className={cx(styles.item, { [styles.selectedItem]: selectedIndex === index })}
      onClick={() => handleItemClick(name)}
    >
      <SearchIcon />
      <span>{highLightText(name, highLight)}</span>
    </li>
  )
}
