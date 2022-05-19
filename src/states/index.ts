import { configureStore } from '@reduxjs/toolkit'

import items from './diseaseRedux'

export const store = configureStore({
  reducer: {
    items,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
