import {
  fetchCurrentUser,
  logInUser,
  logOutUser,
  registerUser,
} from './AuthOperations';

const { createSlice } = require('@reduxjs/toolkit');

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
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.week = payload.week;
      })
      .addCase(logInUser.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.week = payload.week;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
