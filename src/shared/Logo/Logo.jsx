import React from 'react';

import { ReactComponent as LogoMain } from '../../images/victory.svg';

import { LogoLink, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <>
      <LogoLink to="/">
        <LogoText>KidsLike</LogoText>
        <LogoMain />
      </LogoLink>
    </>
  );
};

export default Logo;
