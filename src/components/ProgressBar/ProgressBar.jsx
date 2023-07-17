import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import {
  selectRewardsGained,
  selectRewardsPlanned,
} from 'redux/Planning/PlanningSelectors';

import style from './ProgressBar.module.scss';

const PATH_NAME = Object.freeze({
  MAIN: '/',
  PLANNING: '/planning',
  AWARD: '/awards',
});

const ProgressBar = () => {
  const { pathname } = useLocation();
  const points = useSelector(selectRewardsGained || 0, shallowEqual);
  const plannedPoints = useSelector(selectRewardsPlanned || 0, shallowEqual);

  const percent = parseInt((points / plannedPoints) * 100);

  return (
    <>
      <div
        className={
          pathname === PATH_NAME.AWARD
            ? style.ProgressWrapperAwards
            : style.ProgressWrapper
        }
      >
        <p className={style.PointsTextAwards}>
          Points earned this week:
          <span className={style.PointsAmount}>{points}</span>
        </p>
        <p className={style.PointsTextAwards}>
          Planned points for this week:
          <span className={style.PointsAmount}>{plannedPoints}</span>
        </p>
        <div className={style.ProgressBox}>
          <span className={style.PointAmount}>
            <span className={style.PlannedPoints}>{points}</span> /{' '}
            {plannedPoints}
          </span>
          <div className={style.ProgressTool}>
            <Progress
              percent={points ? (percent >= 100 ? 100 : percent) : 0}
              theme={{
                success: {
                  symbol: ' ',
                  color: 'rgb(223, 105, 180)',
                },
                active: {
                  symbol: ' ',
                  color: '#8ec63f',
                },
                default: {
                  symbol: ' ',
                  color: '#8ec63f',
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
