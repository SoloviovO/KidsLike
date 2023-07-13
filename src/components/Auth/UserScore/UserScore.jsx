import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserScore } from 'redux/Auth/AuthSelectors';

import style from './UserScore.module.scss';

const UserScore = () => {
  const userScore = useSelector(selectUserScore);

  return (
    <>
      <div className={style.ScoreBox}>
        <p className={style.ScoreTitle}>Score balance:</p>
        <p className={style.ScoreValue}>{userScore}</p>
      </div>
    </>
  );
};

export default UserScore;
