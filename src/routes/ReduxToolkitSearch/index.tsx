import SEO from 'components/Seo'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getDiseaseList, getDiseaseAPI } from 'states/diseaseRedux'
import { SearchResult } from 'components/Search/SearchResult'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import { searchState } from 'states/disease'

const ReduxToolkitSearch = () => {
  const searchResult = useRecoilValue(searchState)
  const dispatch = useAppDispatch()
  const diseaseList = useAppSelector(getDiseaseList)

  useEffect(() => {
    dispatch(getDiseaseAPI(searchResult))
  }, [dispatch, searchResult])

  return (
    <div>
      <SEO title='redux' />
      <SearchResult data={diseaseList} />
    </div>
  )
}

export default ReduxToolkitSearch
