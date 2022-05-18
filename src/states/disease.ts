import { atom, selector } from 'recoil'
import { getOpenDiseaseAPi } from 'services/disease'
import { Items } from 'types/disease'

export const searchState = atom<string>({
  key: '#searchState',
  default: '',
})

export const searchResultState = selector<Items | null>({
  key: '#SearchResultState',
  get: async ({ get }) => {
    const search = get(searchState)

    if (!search) {
      return null
    }

    const result = getOpenDiseaseAPi({ searchText: search }).then((res) => {
      console.count('recoill API 호출')
      return res.data.response.body.items
    })

    return result
  },
})
