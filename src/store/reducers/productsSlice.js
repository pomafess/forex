import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from '../sunck/productsSunck'

const initialState = {
  allProducts: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
 
  },
  extraReducers: {
    [getAllProducts.pending.type]: (state) => { },
    [getAllProducts.fulfilled.type]: (state, action) => {
      state.allProducts = action.payload
    },
    [getAllProducts.rejected.type]: (state, action) => { },
  }
}
)

export const { } = productsSlice.actions

export default productsSlice.reducer