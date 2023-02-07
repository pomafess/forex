import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addProduct: (state, action) => {
      state.cart.push(action.payload)
      },
      postOrder: (state, action) => {
      state.cart = []
      },
  },
}
)

export const { addProduct, postOrder } = cartSlice.actions

export default cartSlice.reducer