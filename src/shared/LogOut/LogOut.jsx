import React from 'react';

import { ReactComponent as LogOutIcon } from '../../images/logout.svg';

import style from './LogOut.module.scss';

const LogOut = ({ openModal }) => {
  return (
    <>
      <button className={style.LogOutBtn} type="button" onClick={openModal}>
        <LogOutIcon />
      </button>
    </>
  );
};

export default LogOut;
