import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { token } from 'redux/Auth/AuthOperations';

export const getAllAwards = createAsyncThunk(
  'award/getAwards',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const currentToken = state.auth.token;
    token.set(currentToken);
    try {
      const { data } = await axios.get('/gift');
      return data.ruGifts;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const buyAwards = createAsyncThunk(
  'award/buyAwards',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/gift', credential);
      const { updatedBalance, purchasedGiftIds } = data;
      return { updatedBalance, purchasedGiftIds };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
