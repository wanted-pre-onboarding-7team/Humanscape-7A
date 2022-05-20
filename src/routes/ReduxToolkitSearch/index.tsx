import SEO from 'components/Seo'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getDiseaseList, getDiseaseAPI } from 'states/diseaseRedux'
import { SearchResult } from 'components/Search/SearchResult'
import { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import { searchState } from 'states/disease'
import Spinner from 'components/Spinner'

const ReduxToolkitSearch = () => {
  const searchResult = useRecoilValue(searchState)
  const dispatch = useAppDispatch()
  const diseaseList = useAppSelector(getDiseaseList)

  useEffect(() => {
    if (searchResult) {
      dispatch(getDiseaseAPI(searchResult))
    }
    // eslint-disable-next-line no-useless-return
    if (!diseaseList.loading) return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult])

  return (
    <div>
      <SEO title='redux' />
      {diseaseList.loading ? <Spinner /> : <SearchResult data={diseaseList.response} />}
    </div>
  )
}

export default ReduxToolkitSearch
