import React from 'react';

import Prize from 'images/auth/Prize.png';
import PrizeRet from 'images/auth/Prize-2x.png';
import CleanGigl from 'images/auth/Clean-girl.png';
import CleanGiglRet from 'images/auth/Clean-girl-2x.png';
import Robo from 'images/auth/Robo.png';
import RoboRet from 'images/auth/Robo-2x.png';
import Clean from 'images/auth/Clean.png';
import CleanRet from 'images/auth/Clean-2x.png';

import style from './AuthPhotos.module.scss';

const AuthPhotos = () => {
  return (
    <>
      <div className={style.PhotosWrapper}>
        <div className={style.BoxFirst}>
          <picture>
            <source srcSet={`${Clean}, ${CleanRet} 2x`} />
            <img className={style.Image} src={Clean} alt="clean" />
          </picture>
        </div>
        <div className={style.BoxSecond}>
          <picture>
            <source srcSet={`${Prize}, ${PrizeRet} 2x`} />
            <img className={style.Image} src={Prize} alt="prize" />
          </picture>
        </div>
        <div className={style.BoxThird}>
          <picture>
            <source srcSet={`${Robo}, ${RoboRet} 2x`} />
            <img className={style.Image} src={Robo} alt="robo" />
          </picture>
        </div>
        <div className={style.BoxFourth}>
          <picture>
            <source srcSet={`${CleanGigl}, ${CleanGiglRet} 2x`} />
            <img className={style.Image} src={CleanGigl} alt="clean girl" />
          </picture>
        </div>
      </div>
    </>
  );
};

export default AuthPhotos;
