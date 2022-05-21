import { Items } from 'types/disease'

import { useRecoilValue } from 'recoil'
import { searchState } from 'states/disease'

import { SearchContainer } from './ResultContainer'
import { ResultItem } from './ResultItem'
import { NoResult } from 'components/Loading/NoResult'

interface ISearchResultProp {
  data: Items | null | string | undefined
}
export const SearchResult = ({ data }: ISearchResultProp) => {
  const search = useRecoilValue(searchState)

  if (!search) return null
  if (!data) return <NoResult content='검색 결과가 없습니다.' />
  if (typeof data === 'string') return <NoResult content={data} />
  if (!Array.isArray(data.item) && typeof data.item === 'object')
    return (
      <SearchContainer>
        <ResultItem key={data.item.sickCd} index={0} name={data.item.sickNm} />
      </SearchContainer>
    )
  return (
    <SearchContainer>
      {Array.isArray(data.item) &&
        data.item.map((item, index) => <ResultItem key={item.sickCd} index={index} name={item.sickNm} />)}
    </SearchContainer>
  )
}
