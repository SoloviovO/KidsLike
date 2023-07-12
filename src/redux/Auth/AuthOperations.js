import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credential);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credential);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const currentUserInfo = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/user/info');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
