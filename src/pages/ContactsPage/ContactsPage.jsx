import { Container } from 'components/App.styled';
import ContactList from 'components/Contact/ContactList/ContactList';
import React from 'react';
import {
  ContactSubtitle,
  ContactTitle,
  ContactWrapper,
} from './ContactsPage.styled';
import Footer from 'shared/Footer/Footer';

const ContactsPage = () => {
  return (
    <>
      <Container>
        <ContactWrapper>
          <ContactTitle>Our team</ContactTitle>
          <ContactSubtitle>Always ready for new challenges!</ContactSubtitle>
          <ContactList />
          <Footer />
        </ContactWrapper>
      </Container>
    </>
  );
};

export default ContactsPage;
