import { combineSlices, configureStore } from '@reduxjs/toolkit'

import { itemSlice } from '../features/item/itemSlice'
import { categorySlice } from '../features/category/categorySlice'

const rootReducer = combineSlices(itemSlice, categorySlice)

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
