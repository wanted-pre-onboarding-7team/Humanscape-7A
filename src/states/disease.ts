import { atom, selector } from 'recoil'
import { getOpenDiseaseAPi } from 'services/disease'
import { Items } from 'types/disease'

export const searchState = atom<string>({
  key: '#searchState',
  default: '',
})

export const keyDownIndexState = atom<number>({
  key: '#keyDownIndexState',
  default: 0,
})

export const clickItemState = atom<string>({
  key: 'clickItemState',
  default: '',
})

export const searchResultState = selector<Items | null | string>({
  key: '#SearchResultState',
  get: async ({ get }) => {
    const search = get(searchState)

    if (!search) {
      return null
    }

    const result = getOpenDiseaseAPi({ searchText: search })
      .then((res) => {
        return res.data.response
      })
      .then((data) => {
        let finalData
        if (data.header.resultCode === '00') {
          // eslint-disable-next-line no-console
          console.count('recoill API 호출')
          finalData = data.body.items
        } else {
          finalData = data.header.resultMsg
        }
        return finalData
      })

    return result
  },
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent',
  },
})
