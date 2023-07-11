import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/Auth/AuthOperations';

export const getGiftsThunk = createAsyncThunk(
  'awards/getGifts',
  async (_, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token;
      token.set(currentToken);
      const getGiftsService = async () => {
        return await axios.get('/gift');
      };

      const response = await getGiftsService();
      return response.data.ruGifts;
    } catch (e) {
      return rejectWithValue();
    }
  }
);

export const buyGiftsThunk = createAsyncThunk(
  'awards/buyGifts',
  async (body, { rejectWithValue }) => {
    try {
      const buyGiftsService = async body => {
        return await axios.patch('/gift', body);
      };

      const resp = await buyGiftsService(body);
      const { updatedBalance, purchasedGiftIds } = resp.data;
      return { updatedBalance, purchasedGiftIds };
    } catch (e) {
      return rejectWithValue();
    }
  }
);
