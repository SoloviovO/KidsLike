import React from 'react';

const PointAmount = ({ point }) => {
  return <p>{`${point} ${point === 1 ? 'point' : 'points'}`}</p>;
};

export default PointAmount;
