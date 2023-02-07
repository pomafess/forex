import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoading } from '../reducers/commonSlice';

const BASE_URL = 'https://dummyjson.com/'

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, { rejectWithValue, dispatch }) => {
   try {
      dispatch(setIsLoading(true));
      const response = await axios.get(`${BASE_URL}products`);
     if (response) {
       dispatch(setIsLoading(false));
       return response.data.products;
     }
    } catch (error) {
      dispatch(setIsLoading(false));
      return rejectWithValue(error.message);
    }
  }
);