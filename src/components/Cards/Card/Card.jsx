import React from 'react';

import CardBody from 'components/Cards/CardBody/CardBody';
import CardFooter from 'components/Cards/CardFooter/CardFooter';

const Card = ({ ...task }) => {
  const { imageUrl, ...taskInfo } = task;
  const { title } = taskInfo;
  return (
    <>
      <article>
        <CardBody img={imageUrl} alt={title} />
        <CardFooter {...taskInfo} />
      </article>
    </>
  );
};

export default Card;
