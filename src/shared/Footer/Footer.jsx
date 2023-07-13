import React from 'react';

import { ReactComponent as LogoMain } from '../../images/victory.svg';

import style from './Footer.module.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className={style.FooterBox}>
        <div className={style.LogoBox}>
          <p className={style.LogoText}>KidsLike</p>
          <LogoMain />
        </div>
        <p className={style.LogoText}>
          Making the life of parents and children isy :)
        </p>
        <p className={style.LogoText}>{year}</p>
      </div>
    </>
  );
}

export default Footer;
