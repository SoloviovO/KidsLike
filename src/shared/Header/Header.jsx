import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserScore from 'components/Auth/UserScore/UserScore';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

import styles from '../../components/App.module.scss';
import style from './Header.module.scss';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={style.HeaderBox}>
        <div className={styles.Container}>
          <div className={style.HeaderWrapper}>
            <Logo />
            {isLoggedIn && <UserScore />}
            <Navigation />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
