import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserScore from 'components/Auth/UserScore/UserScore';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

import { Container } from 'components/App.styled';
import { HeaderBox, HeaderWrapper } from './Header.styled';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HeaderBox>
        <Container>
          <HeaderWrapper>
            <Logo />
            {isLoggedIn && <UserScore />}
            <Navigation />
          </HeaderWrapper>
        </Container>
      </HeaderBox>

      <Outlet />
    </>
  );
}

export default Header;
