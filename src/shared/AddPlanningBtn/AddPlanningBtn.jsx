import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { ReactComponent as IconOk } from 'images/icon-ok.svg';
import { ReactComponent as IconAdd } from 'images/icon-add.svg';

import DaysList from 'shared/DaysList/DaysList';
import Loader from 'shared/Loader/Loader';
import { addTaskToProvidedDays } from 'redux/Planning/PlanningOperations';
import { selectDaysList } from 'redux/Planning/PlanningSelectors';

const AddPlanningBtn = ({ _id }) => {
  const daysList = useSelector(
    state => selectDaysList(state, _id),
    shallowEqual
  );
  const dispatch = useDispatch();

  const [selectedRadio, setSelectedRadio] = useState(daysList);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleChange = event => {
    const { value } = event.target;

    setSelectedRadio(prevState =>
      prevState.map(item =>
        item.day === value ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleIconAddClick = e => {
    if (!show) {
      return setShow(true);
    }
    setIsLoading(true);

    dispatch(
      addTaskToProvidedDays({
        id: _id,
        body: {
          days: selectedRadio.map(day => day.isChecked),
        },
      })
    )
      .unwrap()
      .then(() => {
        setShow(!show);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      {show && (
        <DaysList
          _id={_id}
          onChange={handleChange}
          selectedRadio={selectedRadio}
        />
      )}

      <button type="button" onClick={handleIconAddClick}>
        {show ? <IconOk /> : <IconAdd />}
      </button>
      {isLoading && <Loader width="25" height="7" color="#3e7adc" />}
    </div>
  );
};

export default AddPlanningBtn;
