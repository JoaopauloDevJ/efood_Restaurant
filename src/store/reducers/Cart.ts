import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../page/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('O item já foi adicionado ao carrinho!')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remover } = cartSlice.actions
export default cartSlice.reducer
