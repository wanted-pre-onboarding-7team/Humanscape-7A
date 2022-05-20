import { SusLoding } from 'components/Loading/NoResult'
import { ResultItem } from './ResultItem'
import { Items } from 'types/disease'
import { useRecoilValue } from 'recoil'
import { SearchContainer } from './ResultContainer'
import { searchState } from 'states/disease'

interface ISearchResultProp {
  data: Items | null | string | undefined
}
export const SearchResult = ({ data }: ISearchResultProp) => {
  const search = useRecoilValue(searchState)

  if (!search) return null
  if (!data) return <SusLoding content='검색 결과가 없습니다.' />
  if (typeof data === 'string') return <SusLoding content={data} />
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
