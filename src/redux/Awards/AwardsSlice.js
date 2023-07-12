import { createSlice } from '@reduxjs/toolkit';

import { buyGiftsThunk, getGiftsThunk } from './AwardsOperations';

const awardsInitialState = {
  gifts: [],
  boughtGiftsIds: [],
  isLoading: false,
};

const awardsSlice = createSlice({
  name: 'award',
  initialState: awardsInitialState,
  reducers: {
    toggleSelectGift(state, { payload }) {
      state.gifts[payload].isSelected = !state.gifts[payload].isSelected;
    },
    refreshBoughtGiftsIds(state, { payload }) {
      state.boughtGiftsIds = [];
      state.gifts = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getGiftsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getGiftsThunk.fulfilled, (state, { payload }) => {
        state.gifts = payload;
        state.isLoading = false;
      })
      .addCase(getGiftsThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(buyGiftsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(buyGiftsThunk.fulfilled, (state, { payload }) => {
        state.boughtGiftsIds = payload.purchasedGiftIds;
        state.isLoading = false;
      })
      .addCase(buyGiftsThunk.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { toggleSelectGift, refreshBoughtGiftsIds } = awardsSlice.actions;
export const awardsReducer = awardsSlice.reducer;
