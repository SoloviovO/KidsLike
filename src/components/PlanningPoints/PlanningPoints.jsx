import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import 'react-sweet-progress/lib/style.css';

import {
  configuredEndDate,
  configuredStartDate,
} from './helpers/helpers.function';

import Loader from 'shared/Loader/Loader';

import {
  selectEndWeekDate,
  selectStartWeekDate,
} from 'redux/Auth/AuthSelectors';
import { selectRewardsPlanned } from 'redux/Planning/PlanningSelectors';

import style from './PlanningPoints.module.scss';

const PlanningPoints = () => {
  const plannedPoints = useSelector(selectRewardsPlanned || 0, shallowEqual);
  const startDate = useSelector(selectStartWeekDate, shallowEqual);
  const endDate = useSelector(selectEndWeekDate, shallowEqual);

  if (!startDate && !endDate) {
    return <Loader width="100" color="#5679D7" />;
  }

  const startingDate = configuredStartDate(startDate);
  const endingDate = configuredEndDate(endDate);

  return (
    <>
      <div className={style.PlanPointsBox}>
        <div className={style.PlanWeekBox}>
          <span className={style.PlanWeekText}>Plan for the week:</span>
          <div className={style.PlanWeekDate}>
            {startingDate} <span> - </span> {endingDate}
          </div>
        </div>
        <div className={style.PlanWeekTaskBox}>
          <div className={style.PointsBox}>
            <span className={style.PlanWeekPointTextB}>Defined tasks for</span>
            <div className={style.PlannedPoint}>{plannedPoints}</div>
            <span className={style.PlanWeekPointText}>points</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(PlanningPoints);
