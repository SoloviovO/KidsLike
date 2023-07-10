import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrentUser, logInUser } from 'redux/Auth/AuthOperations';
import {
  addTaskToProvidedDays,
  createTask,
  toggleTaskStatus,
} from './PlanningOperations';

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
      .addCase(toggleTaskStatus.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleTaskStatus.fulfilled, (state, { payload }) => {
        state.balance = payload.updatedBalance;
        state.rewardsGained = payload.updatedWeekGainedRewards;
        state.tasks = payload.data;
        state.isLoading = false;
      })
      .addCase(toggleTaskStatus.rejected, state => {
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.tasks = payload.week.tasks;
        state.balance = payload.user.balance;
        state.rewardsGained = payload.week.rewardsGained;
        state.rewardsPlanned = payload.week.rewardsPlanned;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.tasks = payload.week.tasks;
        state.balance = payload.user.balance;
        state.rewardsGained = payload.week.rewardsGained;
        state.rewardsPlanned = payload.week.rewardsPlanned;
      })
      .addCase(addTaskToProvidedDays.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTaskToProvidedDays.fulfilled, (state, { payload }) => {
        state.rewardsPlanned = payload.updatedWeekPlannedRewards;
        state.tasks = payload.data;
        state.isLoading = false;
      })
      .addCase(addTaskToProvidedDays.rejected, state => {
        state.isLoading = false;
      })
      .addCase(createTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
        state.isLoading = false;
      })
      .addCase(createTask.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const planningReducer = planningSlice.reducer;
