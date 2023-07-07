import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const toggleTaskStatus = createAsyncThunk(
  'task/toggleStatus',
  async (body, { rejectWithValue, getState }) => {
    try {
      const toggleTaskStatusService = async (id, body) => {
        return await axios.patch(`/task/switch/${id}`, body);
      };
      const response = await toggleTaskStatusService(body.id, body.body);

      const tasks = getState().task.tasks;

      const data = tasks.reduce((acc, task) => {
        if (task._id === response.data.updatedTask.id) {
          const changedTask = { ...task };

          changedTask.days = response.data.updatedTask.days;
          return [...acc, changedTask];
        }

        return [...acc, task];
      }, []);

      return {
        data,
        updatedBalance: response.data.updatedBalance,
        updatedWeekGainedRewards: response.data.updatedWeekGainedRewards,
      };
    } catch (e) {
      return rejectWithValue();
    }
  }
);
