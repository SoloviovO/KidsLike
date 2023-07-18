import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames';

import { ReactComponent as Check } from 'images/icons/checked.svg';
import { ReactComponent as Attention } from 'images/icons/attention.svg';

import { selectDates } from 'redux/Auth/AuthSelectors';
import { toggleTaskStatus } from 'redux/Planning/PlanningOperations';
import { selectAwards } from 'redux/Awards/AwardsSelectors';
import { toggleSelectAward } from 'redux/Awards/AwardsSlice';

import Loader from 'shared/Loader/Loader';

import style from './TaskToggle.module.scss';

const TaskToggle = ({ _id, isCompleted, isSelected }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dates = useSelector(selectDates, shallowEqual);
  const gifts = useSelector(selectAwards, shallowEqual);

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
      dispatch(toggleSelectAward(idxInArray));
    }
  };
  return (
    <>
      <label className={style.TaskToggleLabel} htmlFor={_id}>
        <input
          className={style.TaskToggleInput}
          id={_id}
          type="checkbox"
          onChange={handleToggleChange}
          checked={isSelected || isCompleted}
        />
        {isLoading && (
          <div className={style.TaskToggleLoader}>
            <Loader height="25" color="#5679D7" />
          </div>
        )}
        <span
          className={classNames(style.TaskToggleSlider, style.TaskToggleRound)}
        >
          <Check className={style.TaskToggleChecked} width="10" height="10" />
          <Attention
            className={style.TaskToggleAttention}
            width="5"
            height="12"
          />
        </span>
      </label>
    </>
  );
};

export default TaskToggle;
