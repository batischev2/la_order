import type { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '../../app/createAppSlice'

export interface Item {
  id: number
  title: string
  url: string
  count: number
}

const initialState = [] as Item[]

export const itemSlice = createAppSlice({
  name: 'item',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Item>) => {
      state.push(action.payload)
    },
    removeFromBasket: (state, action: PayloadAction<Item>) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      state.splice(index, 1)
    },
    increment: (state, action: PayloadAction<Item>) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      state[index].count++
    },
    decrement: (state, action: PayloadAction<Item>) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      state[index].count--
    }
  },
  selectors: {
    selectById: (state, id) => state.find((item) => item.id === id)
  }
})

export const { decrement, increment, addToBasket, removeFromBasket } =
  itemSlice.actions

export const { selectById } = itemSlice.selectors
