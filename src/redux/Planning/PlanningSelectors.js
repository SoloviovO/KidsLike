import { createSelector } from '@reduxjs/toolkit';
import { selectDates } from '../Auth/AuthSelectors';

export const selectTasks = state => state.task.tasks;

export const selectRewardsGained = state => state.task.rewardsGained;

export const selectRewardsPlanned = state => state.task.rewardsPlanned;

export const selectBalance = state => state.task.balance;

export const selectAllTasks = createSelector([selectTasks], tasks =>
  tasks.map(({ _id, imageUrl, reward, title }) => ({
    _id,
    imageUrl,
    reward,
    title,
  }))
);

const getShortWeekDay = day => {
  return day
    .toLocaleString('en-US', {
      weekday: 'long',
    })
    .slice(0, 3);
};

const getIsPrevDays = (dateKeys, currentDay) => {
  return dateKeys
    .filter((_, index, array) => {
      const currentWeekDay = getShortWeekDay(new Date());

      return index < array.indexOf(currentWeekDay);
    })
    .includes(getShortWeekDay(new Date(currentDay)));
};

export const selectDaysList = createSelector(
  [selectTasks, selectDates, (_, id) => id],
  (tasks, days, id) => {
    const weekDaysKeys = Object.keys(days).map(value => value.slice(0, 3));

    const tasksDay = [];

    const currentTask = tasks.find(task => task._id === id);

    for (let i = 0; i < currentTask?.days?.length; i++) {
      const currentDay = currentTask.days[i];

      tasksDay.push({
        day: weekDaysKeys[i],
        isChecked: currentDay.isActive,
        isDisabled: getIsPrevDays(weekDaysKeys, currentDay.date),
      });
    }

    return tasksDay;
  }
);

export const selectDaysTasks = createSelector(
  [selectTasks, (_, currentDate) => currentDate],
  (tasks, currentDate) => {
    if (!currentDate) {
      return null;
    }

    const tasksDay = [];

    for (let i = 0; i < tasks.length; i++) {
      const currentTask = tasks[i];

      const activeTasks = currentTask.days.find(
        ({ date, isActive }) => date === currentDate && isActive
      );

      if (activeTasks) {
        tasksDay.push({
          _id: currentTask._id,
          title: currentTask.title,
          reward: currentTask.reward,
          imageUrl: currentTask.imageUrl,
          isCompleted: activeTasks?.isCompleted,
        });
      }
    }
    return tasksDay;
  }
);
