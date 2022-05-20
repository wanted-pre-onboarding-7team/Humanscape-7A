import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOpenDiseaseAPi } from 'services/disease'
import type { RootState } from '.'

import { Items } from 'types/disease'

export interface DiseaseState {
  response: Items
  loading: boolean
}

export const INIT_DISEASE = {
  item: {
    sickCd: '',
    sickNm: '',
  },
}

const INITIAL_STATE: DiseaseState = {
  response: INIT_DISEASE,
  loading: false,
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
    builder
      .addCase(getDiseaseAPI.pending, (state: DiseaseState, action) => {
        state.loading = true
      })
      .addCase(getDiseaseAPI.fulfilled, (state: DiseaseState, action) => {
        state.response = action.payload
        state.loading = false
      })
  },
})

export default diseaseSlice.reducer

// Selector =====================

export const getDiseaseList = (state: RootState): DiseaseState => state.items
