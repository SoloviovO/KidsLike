import React from 'react';
import { ImGithub, ImLinkedin, ImMail4, ImTelegram } from 'react-icons/im';

import style from './ContactItem.module.scss';

const ContactItem = ({ item }) => {
  return (
    <>
      <li className={style.ContactItems}>
        <img className={style.ContactImg} src={item.photo} alt={item.name} />
        <div className={style.ContactInfo}>
          <p className={style.ContactName}>{item.name}</p>
          <p className={style.ContactRule}>{item.position}</p>
          <p className={style.ContactAbout}>{item.about}</p>
          <ul className={style.ContactSocialList}>
            <li>
              <a href={item.socialLinks.email}>
                <ImMail4 className={style.ContactSocialListIcon} />
              </a>
            </li>
            <li>
              <a href={item.socialLinks.gitHub} target="blanc">
                <ImGithub className={style.ContactSocialListIcon} />
              </a>
            </li>
            <li>
              <a href={item.socialLinks.telegram}>
                <ImTelegram className={style.ContactSocialListIcon} />
              </a>
            </li>
            <li>
              <a href={item.socialLinks.linkedIn} target="blanc">
                <ImLinkedin className={style.ContactSocialListIcon} />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default ContactItem;
