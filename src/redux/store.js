import { configureStore } from '@reduxjs/toolkit'
import cartReducers from '../redux/slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducers
  },
})