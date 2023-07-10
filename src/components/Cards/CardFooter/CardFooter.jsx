import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import CardTitle from 'components/Cards/CardTitle/CardTitle';
import PointAmount from 'components/PointAmount/PointAmount';
import TaskToggle from 'components/TaskToggle/TaskToogle';

import { ReactComponent as Success } from '../../../images/success.svg';
import { ReactComponent as UnSuccess } from '../../../images/unsuccess.svg';
import AddPlanningBtn from 'shared/AddPlanningBtn/AddPlanningBtn';

const PATH_NAME = Object.freeze({
  MAIN: '/main',
  PLANNING: '/planning',
  AWARD: '/award',
});

const CardFooter = ({ ...taskInfo }) => {
  const { title, isCompleted, isSelected } = taskInfo;
  const { pathname } = useLocation();

  const [searchParams] = useSearchParams();

  let _id;
  taskInfo.id ? (_id = taskInfo.id) : (_id = taskInfo._id);
  let reward;
  taskInfo.reward ? (reward = taskInfo.reward) : (reward = taskInfo.price);

  const renderElement = () => {
    switch (pathname) {
      case PATH_NAME.MAIN: {
        const currentWeekDay = new Date().toLocaleString('en-US', {
          weekday: 'long',
        });

        if (currentWeekDay === searchParams.get('day')) {
          return <TaskToggle _id={_id} isCompleted={isCompleted} />;
        }

        return isCompleted ? <Success /> : <UnSuccess />;
      }

      case PATH_NAME.PLANNING: {
        return <AddPlanningBtn _id={_id} />;
      }

      case PATH_NAME.AWARD: {
        return <TaskToggle _id={_id} isCompleted={isSelected} />;
      }

      default:
        return toast.error('NotFound');
    }
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
