import React, { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { selectDates } from 'redux/Auth/AuthSelectors';

import WeekTabContent from 'components/WeekTabContent/WeekTabContent';
import WeekTabs from 'components/WeekTabs/WeekTabs';
import Footer from 'shared/Footer/Footer';

import style from './MainPage.module.scss';

const MainPage = () => {
  const dates = useSelector(selectDates, shallowEqual);
  const [searchParams] = useSearchParams();

  const selectedDay = searchParams.get('day');

  const weekDays = useMemo(() => {
    return Object.keys(dates);
  }, [dates]);

  return (
    <>
      <div className={style.MainContainer}>
        <div className={style.MainWrapper}>
          <WeekTabs weekDays={weekDays} />
          <div className={style.MainBox}>
            <WeekTabContent selectedDate={dates[selectedDay]} />
            <div className={style.FooterBox}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
