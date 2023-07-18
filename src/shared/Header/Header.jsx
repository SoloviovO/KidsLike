import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

import Navigation from 'components/Navigation/Navigation';
import UserScore from 'components/Auth/UserScore/UserScore';
import Logo from '../Logo/Logo';

import styles from 'components/App.module.scss';
import style from './Header.module.scss';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={style.HeaderBox}>
        <div className={styles.Container}>
          <div className={style.HeaderWrapper}>
            <Logo />
            <div className={style.UserScoreBox}>
              {isLoggedIn && <UserScore />}
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Header;
