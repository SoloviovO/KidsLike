import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { selectDates } from 'redux/Auth/AuthSelectors';
import { toggleTaskStatus } from 'redux/Planning/PlanningOperations';

import { ReactComponent as Check } from '../../images/checked.svg';
import { ReactComponent as Attention } from '../../images/attention.svg';
import { selectGifts } from 'redux/Awards/AwardsSelectors';
import { toggleSelectGift } from 'redux/Awards/AwardsSlice';
import { useLocation } from 'react-router-dom';

const TaskToggle = ({ _id, isCompleted, isSelected }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dates = useSelector(selectDates, shallowEqual);
  const gifts = useSelector(selectGifts, shallowEqual);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const currentDay = new Date().toLocaleString('en-US', {
    weekday: 'long',
  });

  const handleToggleChange = event => {
    if (pathname === '/') {
      setIsLoading(true);
      dispatch(
        toggleTaskStatus({
          id: _id,
          body: { date: dates[currentDay] },
        })
      )
        .unwrap()
        .catch(error => {
          toast.error(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (pathname === '/awards') {
      const idxInArray = gifts.findIndex(gift => {
        return gift.id === +event.target.id;
      });
      dispatch(toggleSelectGift(idxInArray));
    }
  };
  return (
    <>
      <label htmlFor={_id}>
        <input
          id={_id}
          type="checkbox"
          onChange={handleToggleChange}
          checked={isSelected || isCompleted}
        />
        {isLoading && <div>Loader</div>}
        <span>
          <Check width="10" height="10" />
          <Attention width="5" height="12" />
        </span>
      </label>
    </>
  );
};

export default TaskToggle;
