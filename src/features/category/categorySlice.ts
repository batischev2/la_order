import { createSlice } from '@reduxjs/toolkit'

export interface CategorySliceState {
  id: number
  title: string
}

const initialState: CategorySliceState = {
  id: 0,
  title: ''
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state = action.payload
    }
  },
  selectors: {
    selectId: (category) => category.id,
    selectTitle: (category) => category.title
  }
})

export const { setCategory } = categorySlice.actions

export const { selectId, selectTitle } = categorySlice.selectors
