import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/Cart'

export const store = configureStore({
  reducer: {
    adicionar: cartSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
