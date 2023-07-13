import React from 'react';

import ContactList from 'components/Contact/ContactList/ContactList';
import Footer from 'shared/Footer/Footer';

import styles from '../../components/App.module.scss';
import style from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={style.ContactWrapper}>
          <h2 className={style.ContactTitle}>Our team</h2>
          <h3 className={style.ContactSubtitle}>
            Always ready for new challenges!
          </h3>
          <ContactList />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
