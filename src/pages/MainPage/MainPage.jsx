import React, { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import WeekTabContent from 'components/WeekTabContent/WeekTabContent';
import WeekTabs from 'components/WeekTabs/WeekTabs';
import { selectDates } from 'redux/Auth/AuthSelectors';
import Footer from 'shared/Footer/Footer';

import styles from '../../components/App.module.scss';
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
      <div className={styles.Container}>
        <div className={style.MainWrapper}>
          <WeekTabs weekDays={weekDays} />
          <div className={style.MainBox}>
            <WeekTabContent selectedDate={dates[selectedDay]} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
