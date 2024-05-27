import type { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from '../../app/createAppSlice'

export interface Item {
  id: number
  categoryId: number
  title: string
  url: string
  count: number
  price: number
}

const initialState = [] as Item[]

export const basketSlice = createAppSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<Item>) => {
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
    },
    reset: () => {
      return initialState
    }
  },
  selectors: {
    findById: (state, id) => state.find((item) => item.id === id),
    itemsByCategory: (state, id) =>
      state.filter((item) => item.categoryId === id).length,
    totalPrice: (state) =>
      state.reduce(
        (accumulator, item) => accumulator + item.price * item.count,
        0
      )
  }
})

export const { decrement, increment, addItem, removeItem, reset } =
  basketSlice.actions

export const { findById, itemsByCategory, totalPrice } = basketSlice.selectors
