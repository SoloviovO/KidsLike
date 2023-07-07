import { toggleTaskStatus } from './PlanningOperations';

const { createSlice } = require('@reduxjs/toolkit');

const planningInitialState = {
  tasks: [],
  balance: null,
  rewardsGained: 0,
  rewardsPlanned: 0,
  isLoading: false,
};

const planningSlice = createSlice({
  name: 'task',
  initialState: planningInitialState,
  extraReducers: builder => {
    builder
      .addCase(toggleTaskStatus.fulfilled, (state, action) => {
        state.balance = action.payload.updatedBalance;
        state.rewardsGained = action.payload.updatedWeekGainedRewards;
        state.tasks = action.payload.data;
        state.isLoading = false;
      })
      .addCase(toggleTaskStatus.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const planningReducer = planningSlice.reducer;
