import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IconBurgerMenu } from '../../../images/icon-burgerMenu.svg';
import { ReactComponent as CloseBurgerMenu } from '../../../images/icon-BurgerClose.svg';

import BurgerMenu from 'shared/BurgerMenu/BurgerMenu';
import VerticalBar from 'shared/VerticalBar/VerticalBar';

import style from './AuthNav.module.scss';

const AuthNav = () => {
  const [isShow, setIsShow] = useState(false);

  const handleIsShowMenu = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className={style.BurgerMenuBox}>
        <BurgerMenu onClick={handleIsShowMenu}>
          <IconBurgerMenu />
        </BurgerMenu>
      </div>
      <nav className={style.NavigationWrapper}>
        <NavLink to="/auth" className={style.NavigationLink}>
          Log in
        </NavLink>
        <VerticalBar />
        <NavLink to="/contacts" className={style.NavigationLink}>
          Contacts
        </NavLink>
      </nav>
      {isShow && (
        <div className={style.NavigationBox}>
          <nav className={style.NavigationBurger}>
            <div className={style.NavigationMenuClose}>
              <BurgerMenu onClick={handleIsShowMenu}>
                <CloseBurgerMenu />
              </BurgerMenu>
            </div>
            <NavLink
              to="/auth"
              className={style.NavigationBurgerLink}
              onClick={handleIsShowMenu}
            >
              Log in
            </NavLink>
            <NavLink
              to="/contacts"
              className={style.NavigationBurgerLink}
              onClick={handleIsShowMenu}
            >
              Contacts
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default AuthNav;
