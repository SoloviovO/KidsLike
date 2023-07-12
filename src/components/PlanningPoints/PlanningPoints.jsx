import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
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
import {
  selectRewardsGained,
  selectRewardsPlanned,
} from 'redux/Planning/PlanningSelectors';

const PATH_NAME = Object.freeze({
  MAIN: '/main',
  PLANNING: '/planning',
  AWARD: '/awards',
});

const PlanningPoints = () => {
  const points = useSelector(selectRewardsGained || 0, shallowEqual);
  const plannedPoints = useSelector(selectRewardsPlanned || 0, shallowEqual);
  const startDate = useSelector(selectStartWeekDate, shallowEqual);
  const endDate = useSelector(selectEndWeekDate, shallowEqual);
  const { pathname } = useLocation();
  const percent = parseInt((points / plannedPoints) * 100);

  if (!startDate && !endDate) {
    return <Loader width="229" />;
  }

  const startingDate = configuredStartDate(startDate);
  const endingDate = configuredEndDate(endDate);

  return (
    <>
      <div>
        {pathname === PATH_NAME.PLANNING && (
          <div>
            <span>Plan for the week:</span>
            <div>
              {startingDate} <span> - </span> {endingDate}
            </div>
          </div>
        )}
        <div>
          {pathname === PATH_NAME.PLANNING ? (
            <div>
              <span>Defined tasks for</span>
              <div>
                <div>{plannedPoints}</div>
              </div>
              <span>points</span>
              <span>POINTS</span>
            </div>
          ) : (
            <div>
              <span>
                <span>{points}</span> / {plannedPoints}
              </span>
              <div>
                <Progress
                  percent={points ? (percent >= 100 ? 100 : percent) : 0}
                  theme={{
                    success: {
                      color: 'rgb(223, 105, 180)',
                    },
                    active: {
                      color: '#fbc630',
                    },
                    default: {
                      color: '#fbc630',
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(PlanningPoints);
