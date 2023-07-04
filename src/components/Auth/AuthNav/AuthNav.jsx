import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/auth">Log in</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </>
  );
};

export default AuthNav;
