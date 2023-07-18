import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as IconBurgerMenu } from 'images/icons/icon-burgerMenu.svg';
import { ReactComponent as CloseBurgerMenu } from 'images/icons/icon-BurgerClose.svg';

import ModalLogout from 'components/Modal/ModalLogout/ModalLogout';
import UserInfo from 'components/Auth/UserInfo/UserInfo';
import BurgerMenu from 'shared/BurgerMenu/BurgerMenu';
import VerticalStick from 'shared/VerticalStick/VerticalStick';
import LogOut from 'shared/LogOut/LogOut';

import style from './UserNav.module.scss';

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowNav, setIsShowNav] = useState(false);
  const location = useLocation();

  const handleTogleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleIsShowMenu = () => {
    setIsShowNav(!isShowNav);
  };

  const isActive = path => {
    return location.pathname === path;
  };

  return (
    <>
      <div className={style.Container}>
        <div className={style.BurgerMenuBox}>
          <BurgerMenu onClick={handleIsShowMenu}>
            <IconBurgerMenu />
          </BurgerMenu>
        </div>
        <nav className={style.BurgerMenuNavigation}>
          <NavLink
            to="/"
            className={
              isActive('/') ? style.BurgerMenuLinkActive : style.BurgerMenuLink
            }
          >
            Main
          </NavLink>
          <VerticalStick />
          <NavLink
            to="/planning"
            className={
              isActive('/planning')
                ? style.BurgerMenuLinkActive
                : style.BurgerMenuLink
            }
          >
            Planning
          </NavLink>
          <VerticalStick />
          <NavLink
            to="/awards"
            className={
              isActive('/awards')
                ? style.BurgerMenuLinkActive
                : style.BurgerMenuLink
            }
          >
            Award
          </NavLink>
          <VerticalStick />
          <NavLink
            to="/contacts"
            className={
              isActive('/contacts')
                ? style.BurgerMenuLinkActive
                : style.BurgerMenuLink
            }
          >
            Contacts
          </NavLink>
        </nav>
        <div className={style.BurgerBox}>
          <UserInfo />
          <VerticalStick />
          <LogOut openModal={handleTogleModal} />
          {isOpen && <ModalLogout onClose={handleTogleModal} />}
        </div>
        {isShowNav && (
          <div className={style.BurgerModalNav}>
            <div className={style.BurgerModalNavBox}>
              <div className={style.BurgerMenuBox}>
                <div className={style.BurgerMenuWrapper}>
                  <UserInfo />
                  <VerticalStick />
                  <LogOut openModal={handleTogleModal} />
                  {isOpen && <ModalLogout onClose={handleTogleModal} />}
                </div>
                <div className={style.BurgerMenuClose}>
                  <BurgerMenu onClick={handleIsShowMenu}>
                    <CloseBurgerMenu />
                  </BurgerMenu>
                </div>
              </div>
              <nav className={style.BurgerMenuNavMob}>
                <NavLink
                  to="/"
                  className={style.BurgerMenuLinkMob}
                  onClick={handleIsShowMenu}
                >
                  Main
                </NavLink>
                <NavLink
                  to="/planning"
                  className={style.BurgerMenuLinkMob}
                  onClick={handleIsShowMenu}
                >
                  Planning
                </NavLink>
                <NavLink
                  to="/awards"
                  className={style.BurgerMenuLinkMob}
                  onClick={handleIsShowMenu}
                >
                  Award
                </NavLink>
                <NavLink
                  to="/contacts"
                  className={style.BurgerMenuLinkMob}
                  onClick={handleIsShowMenu}
                >
                  Contacts
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserNav;
