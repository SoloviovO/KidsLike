import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import {
  selectRewardsGained,
  selectRewardsPlanned,
} from 'redux/Auth/AuthSelectors';

const ProgressBar = () => {
  const points = useSelector(selectRewardsGained || 0, shallowEqual);
  const plannedPoints = useSelector(selectRewardsPlanned || 0, shallowEqual);

  const percent = parseInt((points / plannedPoints) * 100);

  return (
    <>
      <div>
        <p>
          Points earned this week:
          <span>{points}</span>
        </p>
        <p>
          Planned points for this week:
          <span>{plannedPoints}</span>
        </p>
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
      </div>
    </>
  );
};

export default ProgressBar;
