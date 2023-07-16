import React from 'react';

import style from './AwardsSubmitButton.module.scss';

const AwardsSubmitButton = ({ buyHandler }) => {
  return (
    <button className={style.Button} onClick={buyHandler}>
      confirm
    </button>
  );
};

export default AwardsSubmitButton;
