import { clickItemState } from 'states/disease'
import { useSetRecoilState } from 'recoil'

const useItemResult = () => {
  const clickItem = useSetRecoilState(clickItemState)

  const handleItemClick = (e: string) => {
    clickItem(e)
  }

  return {
    handleItemClick,
  }
}
export default useItemResult
