import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/Auth/AuthSelectors';
import { InfoBox, InfoLetter, InfoName, InfoWrapper } from './UserInfo.styled';

const UserInfo = () => {
  const userName = useSelector(selectUserName);
  const firstLetter = userName.slice(0, 1).toUpperCase();
  const IndexValue = userName.indexOf('@');
  const nameUser = userName.slice(0, IndexValue);
  return (
    <>
      <InfoWrapper>
        <InfoBox>
          <InfoLetter>{firstLetter}</InfoLetter>
        </InfoBox>
        <InfoName>{nameUser}</InfoName>
      </InfoWrapper>
    </>
  );
};

export default UserInfo;
