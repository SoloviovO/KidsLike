import React from 'react';
import { Link } from 'react-router-dom';

import bgDesktop from '../../images/mainbg/desk.png';
import bgDesktop2x from '../../images/mainbg/desk-2x.png';
import bgTablet from '../../images/mainbg/tablet.png';
import bgTablet2x from '../../images/mainbg/tablet-2x.png';
import bgMobile from '../../images/mainbg/mob.png';
import bgMobile2x from '../../images/mainbg/mob-2x.png';
import OoopsImage from '../../images/oops-image.png';

import style from './NotFoundPage.module.scss';
import styles from '../../components/App.module.scss';

function NotFoundPage() {
  return (
    <>
      <div className={styles.Container}>
        <div className={style.NotFoundWrapper}>
          <div className={style.NotFoundImage}>
            <img src={OoopsImage} alt="oops" />
          </div>

          <p className={style.NoTaskTitle}>Looks like you're lost(</p>
          <p className={style.NoTaskSubTitle}>
            The page you are looking for is not available!
          </p>
          <div className={style.NoTaskLinkBox}>
            <Link className={style.NoTaskLink} to="/">
              <button className={style.NoTaskButton}>Go home!</button>
            </Link>
          </div>
          <picture>
            <source
              srcSet={`${bgDesktop} 1x, ${bgDesktop2x} 2x`}
              media="(min-width:1280px)"
            />
            <source
              srcSet={`${bgTablet} 1x, ${bgTablet2x} 2x`}
              media="(min-width:768px)"
            />
            <source
              srcSet={`${bgMobile} 1x, ${bgMobile2x} 2x`}
              media="(min-width:320px)"
            />
            <img src={bgMobile} alt="background" />
          </picture>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
