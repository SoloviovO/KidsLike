import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserScore } from 'redux/Auth/AuthSelectors';

import { ScoreBox, ScoreTitle, ScoreValue } from './UserScore.styled';

const UserScore = () => {
  const userScore = useSelector(selectUserScore);

  return (
    <>
      <ScoreBox>
        <ScoreTitle>Score balance:</ScoreTitle>
        <ScoreValue>{userScore}</ScoreValue>
      </ScoreBox>
    </>
  );
};

export default UserScore;
