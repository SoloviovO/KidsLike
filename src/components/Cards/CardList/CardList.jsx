import React from 'react';

import Card from 'components/Cards/Card/Card';

import style from './CardList.module.scss';

const CardList = ({ tasks }) => {
  return (
    <>
      <ul className={style.CardList}>
        {tasks?.map(task => {
          return (
            <li className={style.CardListItem} key={task.id || task._id}>
              <Card {...task} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
