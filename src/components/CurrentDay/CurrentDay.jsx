import React from 'react';

import style from './CurrentDay.module.scss';

const CurrentDay = ({ selectedDate }) => {
  const getCurrentDay = date => {
    if (!date) {
      return null;
    }

    const day = new Date(date).toLocaleString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const formatDay = day.replaceAll('/', '-');
    return formatDay;
  };

  const currentDay = getCurrentDay(selectedDate)?.toUpperCase();
  return (
    <>
      <p className={style.CurrentDayTitle}>
        My tasks:
        <span className={style.CurrentDayText}>{currentDay}</span>
      </p>
    </>
  );
};

export default CurrentDay;
