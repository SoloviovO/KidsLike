import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import CardList from 'components/Cards/CardList/CardList';
import CurrentDay from 'components/CurrentDay/CurrentDay';
import CurrentWeekRange from 'components/CurrentWeekRange/CurrentWeekRange';
import NoTasks from 'components/NoTasks/NoTasks';
import ProgressBar from 'components/ProgressBar/ProgressBar';

import { selectDaysTasks } from 'redux/Planning/PlanningSelectors';

const WeekTabContent = ({ selectedDate }) => {
  const tasks = useSelector(
    state => selectDaysTasks(state, selectedDate),
    shallowEqual
  );

  let data = null;

  if (!tasks) {
    data = <div>Loader</div>;
  } else {
    data = tasks.length ? (
      <div>
        <CardList tasks={tasks} />
      </div>
    ) : (
      <NoTasks />
    );
  }
  return (
    <>
      <CurrentWeekRange />
      <CurrentDay selectedDate={selectedDate} />
      <ProgressBar />
      <div>{data}</div>
    </>
  );
};

export default WeekTabContent;
