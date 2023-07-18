import { createSlice } from '@reduxjs/toolkit';

import { buyAwards, getAllAwards } from './AwardsOperations';

const awardsInitialState = {
  gifts: [],
  boughtGiftsIds: [],
  isLoading: false,
};

const awardsSlice = createSlice({
  name: 'award',
  initialState: awardsInitialState,
  reducers: {
    toggleSelectAward(state, { payload }) {
      state.gifts[payload].isSelected = !state.gifts[payload].isSelected;
    },
    refreshBoughtAwardsId(state, { payload }) {
      state.boughtGiftsIds = [];
      state.gifts = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllAwards.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllAwards.fulfilled, (state, { payload }) => {
        state.gifts = payload;
        state.isLoading = false;
      })
      .addCase(getAllAwards.rejected, state => {
        state.isLoading = false;
      })
      .addCase(buyAwards.pending, state => {
        state.isLoading = true;
      })
      .addCase(buyAwards.fulfilled, (state, { payload }) => {
        state.boughtGiftsIds = payload.purchasedGiftIds;
        state.isLoading = false;
      })
      .addCase(buyAwards.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { toggleSelectAward, refreshBoughtAwardsId } = awardsSlice.actions;
export const awardsReducer = awardsSlice.reducer;
