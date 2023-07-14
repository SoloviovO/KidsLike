import React from 'react';

import style from './PointAmount.module.scss';

const PointAmount = ({ point }) => {
  return (
    <p className={style.PointAmount}>{`${point} ${
      point === 1 ? 'point' : 'points'
    }`}</p>
  );
};

export default PointAmount;
