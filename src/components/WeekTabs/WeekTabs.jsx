import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'shared/Loader/Loader';

const WeekTabs = ({ weekDays }) => {
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
      {weekDays ? (
        <ul>
          {weekDays.map(day => (
            <li key={day}>
              <input
                id={day}
                type="radio"
                name="dayOfWeek"
                value={day}
                checked={isRadioSelected(day)}
                onChange={handleChange}
              />
              <label htmlFor={day}>
                <span>{day}</span>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <Loader width="230" color="#5679D7" />
      )}
    </>
  );
};

export default WeekTabs;
