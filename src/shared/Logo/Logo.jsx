import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoMain } from 'images/icons/victory.svg';

import style from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <Link className={style.LogoLink} to="/">
        <p className={style.LogoText}>KidsLike</p>
        <LogoMain />
      </Link>
    </>
  );
};

export default Logo;
