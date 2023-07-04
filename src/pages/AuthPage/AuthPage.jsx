import React from 'react';

import AuthForm from 'components/Auth/AuthForm/AuthForm';
import AuthPhotos from 'components/Auth/AuthPhotos/AuthPhotos';

import { AuthBox, AuthWrapper } from './AuthPage.styled';

const AuthPage = () => {
  return (
    <>
      <AuthBox>
        <AuthWrapper>
          <AuthPhotos />
          <div>
            <div>
              <AuthForm />
            </div>
          </div>
        </AuthWrapper>
      </AuthBox>
    </>
  );
};

export default AuthPage;
