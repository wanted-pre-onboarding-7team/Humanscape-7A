import SEO from 'components/Seo'
import SearchInput from 'components/Search/SearchInput'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getDiseaseList, getDiseaseAPI } from 'states/diseaseRedux'
import { useSearchParams } from 'react-router-dom'
import { SearchResult } from 'components/Search/SearchResult'
import { useEffect } from 'react'

const ReduxToolkitSearch = () => {
  const [searchParams] = useSearchParams()
  const currentSearch = searchParams.get('search')
  const dispatch = useAppDispatch()
  const diseaseList = useAppSelector(getDiseaseList)

  useEffect(() => {
    dispatch(getDiseaseAPI(currentSearch))
  }, [currentSearch, dispatch])

  return (
    <div>
      <SEO title='redux' />
      <SearchInput />
      <SearchResult data={diseaseList} />
    </div>
  )
}

export default ReduxToolkitSearch
