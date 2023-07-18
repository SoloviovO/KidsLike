import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserScore } from 'redux/Auth/AuthSelectors';

import Loader from 'shared/Loader/Loader';

import style from './UserScore.module.scss';

const UserScore = () => {
  const userScore = useSelector(selectUserScore);

  return (
    <>
      {userScore || userScore === 0 ? (
        <div className={style.ScoreBox}>
          <p className={style.ScoreTitle}>Score balance:</p>
          <p className={style.ScoreValue}>{userScore}</p>
        </div>
      ) : (
        <Loader width="30" height="20" />
      )}
    </>
  );
};

export default UserScore;
