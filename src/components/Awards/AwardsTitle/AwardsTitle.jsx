import ProgressBar from 'components/ProgressBar/ProgressBar';
import React from 'react';

import { ReactComponent as PrizeIcon } from '../../../images/icon-awards.svg';

import style from './AwardsTitle.module.scss';

const AwardsTitle = () => {
  return (
    <div className={style.TitleBox}>
      <div className={style.TitleWrapper}>
        <PrizeIcon />
        <p className={style.Title}>My prizes</p>
      </div>
      <ProgressBar />
    </div>
  );
};

export default AwardsTitle;
