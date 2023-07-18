import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const toggleTaskStatus = createAsyncThunk(
  'task/toggleStatus',
  async ({ id, body }, { rejectWithValue, getState }) => {
    try {
      const response = await axios.patch(`/task/switch/${id}`, body);
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
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addTaskForDays = createAsyncThunk(
  'task/addForDay',
  async ({ id, body }, { rejectWithValue, getState }) => {
    try {
      const response = await axios.patch(`/task/single-active/${id}`, body);
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
        updatedWeekPlannedRewards: response.data.updatedWeekPlannedRewards,
      };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'task/create',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/task', credential);
      const { title, reward, imageUrl, id, days } = data;
      return { title, reward, imageUrl, _id: id, days };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
