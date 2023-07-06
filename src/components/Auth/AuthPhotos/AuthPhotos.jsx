import React from 'react';

import Prize from '../../../images/Prize.png';
import CleanGigl from '../../../images/Clean-girl.png';
import Robo from '../../../images/Robo.png';
import Clean from '../../../images/Clean.png';

import {
  BoxFirst,
  BoxFourth,
  BoxSecond,
  BoxThird,
  Image,
  PhotosWrapper,
} from './AuthPhotos.styled';

const AuthPhotos = () => {
  return (
    <>
      <PhotosWrapper>
        <BoxFirst>
          <Image src={Clean} alt="clean" />
        </BoxFirst>
        <BoxSecond>
          <Image src={Prize} alt="prize" />
        </BoxSecond>
        <BoxThird>
          <Image src={Robo} alt="robo" />
        </BoxThird>
        <BoxFourth>
          <Image src={CleanGigl} alt="clean girl" />
        </BoxFourth>
      </PhotosWrapper>
    </>
  );
};

export default AuthPhotos;
