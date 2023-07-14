import React from 'react';

import style from './CardTitle.module.scss';

const CardTitle = ({ title }) => <p className={style.CardTitle}>{title}</p>;

export default CardTitle;
