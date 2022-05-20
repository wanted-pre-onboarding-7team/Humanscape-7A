import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getOpenDiseaseAPi } from 'services/disease'
import type { RootState } from '.'

import { Items } from 'types/disease'

export interface DiseaseState {
  response: Items
}

const INIT_DISEASE = {
  item: {
    sickCd: '',
    sickNm: '',
  },
}

const INITIAL_STATE: DiseaseState = {
  response: INIT_DISEASE,
}

export const getDiseaseAPI = createAsyncThunk('getDiseaseList', async (currentSearch: string | null) => {
  const result = await getOpenDiseaseAPi({ searchText: currentSearch }).then((res) => res.data.response.body.items)
  return result
})

const diseaseSlice = createSlice({
  name: 'disease',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiseaseAPI.fulfilled, (state: DiseaseState, action) => {
      state.response = action.payload
    })
  },
})

export default diseaseSlice.reducer

// Selector =====================

export const getDiseaseList = (state: RootState): Items => state.items.response
// export const getDiseaseList = (state: RootState) => state.items.response
