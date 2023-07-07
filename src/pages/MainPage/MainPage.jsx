import React, { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import WeekTabContent from 'components/WeekTabContent/WeekTabContent';
import WeekTabs from 'components/WeekTabs/WeekTabs';
import { selectDates } from 'redux/Auth/AuthSelectors';

const MainPage = () => {
  const dates = useSelector(selectDates, shallowEqual);
  const [searchParams] = useSearchParams();

  const selectedDay = searchParams.get('day');

  const weekDays = useMemo(() => {
    return Object.keys(dates);
  }, [dates]);

  return (
    <>
      <WeekTabs weekDays={weekDays} />
      <WeekTabContent selectedDate={dates[selectedDay]} />
    </>
  );
};

export default MainPage;
