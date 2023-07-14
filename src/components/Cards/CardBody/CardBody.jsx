import React from 'react';

import style from './CardBody.module.scss';

const CardBody = ({ img, alt }) => (
  <img className={style.CardImg} src={img} alt={alt} />
);

export default CardBody;
