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
  }, [searchResult])

  if (diseaseList.loading) {
    return (
      <div>
        <SEO title='redux' />
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <SEO title='redux' />
      <SearchResult data={diseaseList.response} />
    </div>
  )
}

export default ReduxToolkitSearch
