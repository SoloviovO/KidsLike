import React from 'react';
import { useSearchParams } from 'react-router-dom';

import CardTitle from 'components/Cards/CardTitle/CardTitle';
import PointAmount from 'components/PointAmount/PointAmount';
import TaskToogle from 'components/TaskToogle/TaskToogle';

import { ReactComponent as Success } from '../../../images/success.svg';
import { ReactComponent as UnSuccess } from '../../../images/unsuccess.svg';

const CardFooter = ({ ...taskInfo }) => {
  const { title, isCompleted } = taskInfo;

  const [searchParams] = useSearchParams();

  let _id;
  taskInfo.id ? (_id = taskInfo.id) : (_id = taskInfo._id);
  let reward;
  taskInfo.reward ? (reward = taskInfo.reward) : (reward = taskInfo.price);

  const renderElement = () => {
    const currentWeekDay = new Date().toLocaleString('en-US', {
      weekday: 'long',
    });

    if (currentWeekDay === searchParams.get('day')) {
      return <TaskToogle _id={_id} isCompleted={isCompleted} />;
    }

    return isCompleted ? <Success /> : <UnSuccess />;
  };
  return (
    <>
      <CardTitle title={title} />
      <PointAmount point={reward} />
      <>{renderElement()}</>
    </>
  );
};

export default CardFooter;
