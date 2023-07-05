import React from 'react';

import contactList from './Contact.json';
import ContactItem from 'components/Contact/ContactItem/ContactItem';

import { ContactListWr } from './ContactList.styled';

const ContactList = () => {
  const { contacts } = contactList;

  return (
    <>
      <ContactListWr>
        {contacts.map(item => (
          <ContactItem key={item.id} item={item} />
        ))}
      </ContactListWr>
    </>
  );
};

export default ContactList;
