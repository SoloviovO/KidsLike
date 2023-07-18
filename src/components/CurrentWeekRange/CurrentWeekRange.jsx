import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { selectWeekRange } from 'redux/Auth/AuthSelectors';

import Loader from 'shared/Loader/Loader';

import style from './CurrentWeekRange.module.scss';

const CurrentWeekRange = () => {
  const weekRange = useSelector(selectWeekRange, shallowEqual);

  const getCurrentWeekRange = weekRange => {
    if (typeof weekRange.currentMonth === 'object') {
      return `Week: ${weekRange.startDate} ${weekRange.currentMonth[0]} - ${weekRange.endDate} ${weekRange.currentMonth[1]}`;
    }
    return `Week: ${weekRange.startDate}-${weekRange.endDate}
    ${weekRange.currentMonth}`;
  };

  return (
    <>
      {weekRange ? (
        <p className={style.WeekRangeText}>{getCurrentWeekRange(weekRange)}</p>
      ) : (
        <Loader height="20" />
      )}
    </>
  );
};

export default CurrentWeekRange;
