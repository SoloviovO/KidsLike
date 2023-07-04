import React from 'react';
import { useDispatch } from 'react-redux';

import { logOutUser } from 'redux/Auth/AuthOperations';
import { ReactComponent as LogOutIcon } from '../../images/logout.svg';

import { LogOutBtn } from './LogOut.styled';

const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <>
      <LogOutBtn type="button" onClick={() => dispatch(logOutUser())}>
        <LogOutIcon />
      </LogOutBtn>
    </>
  );
};

export default LogOut;
