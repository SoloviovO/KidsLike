import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { selectDaysTasks } from 'redux/Planning/PlanningSelectors';

import CardList from 'components/Cards/CardList/CardList';
import CurrentDay from 'components/CurrentDay/CurrentDay';
import CurrentWeekRange from 'components/CurrentWeekRange/CurrentWeekRange';
import NoTasks from 'components/NoTasks/NoTasks';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import CardLoader from 'shared/CardLoader/CardLoader';

import style from './WeekTabContent.module.scss';

const WeekTabContent = ({ selectedDate }) => {
  const tasks = useSelector(
    state => selectDaysTasks(state, selectedDate),
    shallowEqual
  );

  let data = null;

  if (!tasks) {
    data = (
      <div className={style.CardListWrapper}>
        <CardLoader />
      </div>
    );
  } else {
    data = tasks.length ? (
      <div className={style.CardListWrapper}>
        <CardList tasks={tasks} />
      </div>
    ) : (
      <div className={style.NoTaskWrapper}>
        <NoTasks />
      </div>
    );
  }
  return (
    <>
      <div className={style.WeekTabWrapper}>
        <div>
          <CurrentWeekRange />
          <CurrentDay selectedDate={selectedDate} />
        </div>
        <ProgressBar />
      </div>
      <div>{data}</div>
    </>
  );
};

export default WeekTabContent;
