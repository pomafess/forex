import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalData: {
    isOpen: false,
    content: null,
    isLoading: false,
  }
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.modalData.isOpen = action.payload.isOpen
      state.modalData.content = action.payload.content
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
}
)

export const { toggleModal, setIsLoading } = commonSlice.actions

export default commonSlice.reducer