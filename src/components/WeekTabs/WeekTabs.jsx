import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Loader from 'shared/Loader/Loader';

import style from './WeekTabs.module.scss';

const WeekTabs = ({ weekDays }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const currentDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRadio, setSelectedRadio] = useState(
    searchParams.get('day') || currentDay
  );

  const isRadioSelected = value => selectedRadio === value;

  useEffect(() => {
    setSearchParams({ day: selectedRadio });
  }, [selectedRadio, setSearchParams]);

  const handleChange = event => {
    const { value } = event.target;
    setSearchParams({ day: value });
    setSelectedRadio(value);
  };

  return (
    <>
      <div className={style.WeekListWrapper}>
        {weekDays ? (
          <ul className={style.WeekList}>
            {weekDays.map(day => (
              <li className={style.WeekListItem} key={day}>
                <input
                  className={style.WeekListInput}
                  id={day}
                  type="radio"
                  name="dayOfWeek"
                  value={day}
                  checked={isRadioSelected(day)}
                  onChange={handleChange}
                />
                <label className={style.WeekListLabel} htmlFor={day}>
                  <span className={style.WeekListTitle}>
                    {isDesktop ? day : day.slice(0, 2)}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <Loader width="230" color="#5679D7" />
        )}
      </div>
    </>
  );
};

export default WeekTabs;
