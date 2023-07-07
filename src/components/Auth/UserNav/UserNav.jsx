import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LogOut from '../../../shared/LogOut/LogOut';
import ModalLogout from 'components/Modal/ModalLogout/ModalLogout';
import UserInfo from 'components/Auth/UserInfo/UserInfo';

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/planning">Planning</NavLink>
      <NavLink to="/award">Award</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <UserInfo />
      <LogOut openModal={handleTogleModal} />
      {isOpen && <ModalLogout onClose={handleTogleModal} />}
    </>
  );
};

export default UserNav;
