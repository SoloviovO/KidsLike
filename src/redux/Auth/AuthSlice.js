import { createSlice } from '@reduxjs/toolkit';

import {
  currentUserInfo,
  logInUser,
  logOutUser,
  registerUser,
} from './AuthOperations';
import { toggleTaskStatus } from 'redux/Planning/PlanningOperations';

const authInitialState = {
  user: {},
  week: {},
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.week = payload.week;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.week = payload.week;
      })
      .addCase(logInUser.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.week = payload.week;
      })
      .addCase(currentUserInfo.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(toggleTaskStatus.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleTaskStatus.fulfilled, (state, { payload }) => {
        state.user.balance = payload.updatedBalance;
        state.isLoading = false;
      })
      .addCase(toggleTaskStatus.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
