import React from 'react';

import Card from 'components/Cards/Card/Card';

const CardList = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks?.map(task => {
          return (
            <li key={task.id || task._id}>
              <Card {...task} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
