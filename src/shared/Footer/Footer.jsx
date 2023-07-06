import React from 'react';

import { ReactComponent as LogoMain } from '../../images/victory.svg';

import { FooterBox, LogoBox, LogoText } from './Footer.styled';

function Footer() {
  return (
    <>
      <FooterBox>
        <LogoBox>
          <LogoText>KidsLike</LogoText>
          <LogoMain />
        </LogoBox>
        <LogoText>Making the life of parents and children isy :)</LogoText>
        <LogoText>2023</LogoText>
      </FooterBox>
    </>
  );
}

export default Footer;
