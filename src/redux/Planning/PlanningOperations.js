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

export const addTaskToProvidedDays = createAsyncThunk(
  'task/addToProvided',
  async (body, { rejectWithValue, getState }) => {
    try {
      const addTaskToProvidedDaysService = async (id, body) => {
        return await axios.patch(`/task/single-active/${id}`, body);
      };
      const response = await addTaskToProvidedDaysService(body.id, body.body);
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
    } catch (e) {
      return rejectWithValue();
    }
  }
);

export const createTask = createAsyncThunk(
  'task/create',
  async (body, { rejectWithValue }) => {
    try {
      const createTaskService = async body => {
        return await axios.post('/task', body);
      };
      const { data } = await createTaskService(body);

      const { title, reward, imageUrl, id, days } = data;

      return { title, reward, imageUrl, _id: id, days };
    } catch (e) {
      return rejectWithValue();
    }
  }
);
