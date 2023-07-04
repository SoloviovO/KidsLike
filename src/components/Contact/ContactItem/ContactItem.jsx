import React from 'react';

import {
  ContactAbout,
  ContactGit,
  ContactImg,
  ContactInfo,
  ContactLinkedin,
  ContactMail,
  ContactName,
  ContactRule,
  ContactSocialList,
  ContactTelegtam,
  ContactItems,
} from 'components/Contact/ContactItem/ContactItem.styled';

const ContactItem = ({ item }) => {
  return (
    <>
      <ContactItems>
        <ContactImg src={item.photo} alt={item.name} />
        <ContactInfo>
          <ContactName>{item.name}</ContactName>
          <ContactRule>{item.position}</ContactRule>
          <ContactAbout>{item.about}</ContactAbout>
          <ContactSocialList>
            <li>
              <a href={item.socialLinks.email}>
                <ContactMail />
              </a>
            </li>
            <li>
              <a href={item.socialLinks.gitHub} target="blanc">
                <ContactGit />
              </a>
            </li>
            <li>
              <a href={item.socialLinks.telegram}>
                <ContactTelegtam />
              </a>
            </li>
            <li>
              <a href={item.socialLinks.linkedIn} target="blanc">
                <ContactLinkedin />
              </a>
            </li>
          </ContactSocialList>
        </ContactInfo>
      </ContactItems>
    </>
  );
};

export default ContactItem;
