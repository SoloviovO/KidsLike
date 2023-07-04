import React from 'react';
import contactList from './Contact.json';
import { ContactListWr } from './ContactList.styled';
import ContactItem from 'components/Contact/ContactItem/ContactItem';

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
