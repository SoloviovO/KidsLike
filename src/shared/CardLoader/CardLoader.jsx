import React from 'react';

import Skeleton from './Skeleton/Skeleton';

import style from './CardLoader.module.scss';

const CardListLoader = ({ amount = 8 }) => {
  return (
    <ul className={style.CardsList}>
      {[...Array(amount)].map((_, i) => (
        <li key={i} className={style.CardsListItem}>
          <article>
            <Skeleton className={style.CardsListBody} />
            <Skeleton
              className={style.CardsListFooter}
              gradient="linear-gradient(90deg, #f8d99c, #ffbc33, #f8d99c)"
            />
          </article>
        </li>
      ))}
    </ul>
  );
};
export default CardListLoader;
