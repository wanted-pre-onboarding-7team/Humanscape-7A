import { atom, selector } from 'recoil'
import { getOpenDiseaseAPi } from 'services/disease'
import { IBody, Items } from 'types/disease'

export const searchState = atom<string>({
  key: '#searchState',
  default: '',
})

export const clickItemState = atom<string>({
  key: 'clickItemState',
  default: '',
})

export const searchResultState = selector<IBody | string>({
  key: '#SearchResultState',
  get: async ({ get }) => {
    const search = get(searchState)

    if (!search) {
      return ''
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
          finalData = data.body
        } else {
          finalData = data.header.resultMsg
        }
        return finalData
      })

    return result
  },
})
