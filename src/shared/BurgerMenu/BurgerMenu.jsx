import React from 'react';

import style from './BurgerMenu.module.scss';

const BurgerMenu = ({ children, onClick }) => {
  return (
    <button type="button" className={style.BurgerMenu} onClick={onClick}>
      {children}
    </button>
  );
};

export default BurgerMenu;
