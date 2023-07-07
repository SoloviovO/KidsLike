import React from 'react';
import { Link } from 'react-router-dom';

import bgDesktop from '../../images/mainbg/desk.png';
import bgDesktop2x from '../../images/mainbg/desk-2x.png';
import bgTablet from '../../images/mainbg/tablet.png';
import bgTablet2x from '../../images/mainbg/tablet-2x.png';
import bgMobile from '../../images/mainbg/mob.png';
import bgMobile2x from '../../images/mainbg/mob-2x.png';

const NoTasks = () => {
  return (
    <>
      <p>No tasks on this day</p>
      <Link to="/planning">
        <button>Schedule tasks</button>
      </Link>
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
        <img src={bgMobile} alt="" />
      </picture>
    </>
  );
};

export default NoTasks;
