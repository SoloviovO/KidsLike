import React from 'react';

import AuthForm from 'components/Auth/AuthForm/AuthForm';
import AuthPhotos from 'components/Auth/AuthPhotos/AuthPhotos';

import { AuthWrapper, FormBox } from './AuthPage.styled';
import { Container } from '../../components/App.styled';

const AuthPage = () => {
  return (
    <>
      <Container>
        <AuthWrapper>
          <AuthPhotos />
          <FormBox>
            <AuthForm />
          </FormBox>
        </AuthWrapper>
      </Container>
    </>
  );
};

export default AuthPage;
