import React from 'react';

import AuthForm from 'components/Auth/AuthForm/AuthForm';
import AuthPhotos from 'components/Auth/AuthPhotos/AuthPhotos';

import style from './AuthPage.module.scss';
import styles from '../../components/App.module.scss';
import Footer from 'shared/Footer/Footer';

const AuthPage = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={style.AuthWrapper}>
          <AuthPhotos />
          <div className={style.FormBox}>
            <AuthForm />
            <div className={style.FooterBox}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
