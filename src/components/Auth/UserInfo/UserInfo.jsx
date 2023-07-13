import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserName } from 'redux/Auth/AuthSelectors';

import style from './UserInfo.module.scss';

const UserInfo = () => {
  const userName = useSelector(selectUserName);
  const firstLetter = userName.slice(0, 1).toUpperCase();
  const IndexValue = userName.indexOf('@');
  const nameUser = userName.slice(0, IndexValue);
  return (
    <>
      <div className={style.InfoWrapper}>
        <div className={style.InfoBox}>
          <p className={style.InfoLetter}>{firstLetter}</p>
        </div>
        <p className={style.InfoName}>{nameUser}</p>
      </div>
    </>
  );
};

export default UserInfo;
