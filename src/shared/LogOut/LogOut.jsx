import React from 'react';

import { ReactComponent as LogOutIcon } from '../../images/logout.svg';

import { LogOutBtn } from './LogOut.styled';

const LogOut = ({ openModal }) => {
  return (
    <>
      <LogOutBtn type="button" onClick={openModal}>
        <LogOutIcon />
      </LogOutBtn>
    </>
  );
};

export default LogOut;
