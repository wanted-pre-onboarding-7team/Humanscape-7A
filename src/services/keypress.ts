import { atom } from 'recoil'

export const keyDownIndexState = atom<number>({
  key: '#keyDownIndexState',
  default: 0,
})

export const selectedValueState = atom<string>({
  key: '#selectedIndexValue',
  default: '',
})
