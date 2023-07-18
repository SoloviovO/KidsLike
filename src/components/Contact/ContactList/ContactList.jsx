import React from 'react';

import contactList from './Contact.json';

import ContactItem from 'components/Contact/ContactItem/ContactItem';

import style from './ContactList.module.scss';

const ContactList = () => {
  const { contacts } = contactList;

  return (
    <>
      <ul className={style.ContactListWr}>
        {contacts.map(item => (
          <ContactItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
