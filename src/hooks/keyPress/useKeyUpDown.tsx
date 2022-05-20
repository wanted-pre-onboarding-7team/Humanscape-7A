import useItemResult from 'hooks/useItemResult'
import { KeyboardEvent } from 'react'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { keyDownIndexState, selectedValueState } from 'services/keypress'
import { searchResultState } from 'states/disease'

const useKeyUpDown = () => {
  const searchResultable = useRecoilValueLoadable(searchResultState)
  const [keyDownIndex, setKeyDownIndex] = useRecoilState(keyDownIndexState)
  const selectedIndexValue = useRecoilValue(selectedValueState)
  const { handleItemClick } = useItemResult()

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return
    if (searchResultable.state === 'hasValue') {
      let itemLenght: number
      if (typeof searchResultable.contents !== 'string') {
        if (searchResultable.contents.totalCount >= 10) {
          itemLenght = 9
        } else {
          itemLenght = searchResultable.contents.totalCount - 1
        }
        if (e.key === 'ArrowDown') {
          setKeyDownIndex((prev) => {
            if (prev >= itemLenght) {
              return 0
            }
            return prev + 1
          })
        }

        if (e.key === 'ArrowUp') {
          setKeyDownIndex((prev) => {
            if (prev <= 0) {
              return itemLenght
            }
            return prev - 1
          })
        }

        if (e.key === 'Enter') {
          handleItemClick(selectedIndexValue)
        }
      }
    }
  }

  return { onKeyDown }
}

export default useKeyUpDown
