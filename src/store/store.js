import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './reducers/productsSlice'
import cartSlice from './reducers/cartSlice'
import commonSlice from './reducers/commonSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartSlice,
        common: commonSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['common/toggleModal'],
            ignoredPaths: ['common'],     
    }
  }),
})