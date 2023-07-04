import AuthNav from 'components/Auth/AuthNav/AuthNav';
import UserNav from 'components/Auth/UserNav/UserNav';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{isLoggedIn ? <UserNav /> : <AuthNav />}</>;
};

export default Navigation;
