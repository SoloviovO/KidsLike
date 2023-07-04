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
  ImgFirst,
  ImgFourth,
  ImgSecond,
  ImgThird,
  PhotosWrapper,
} from './AuthPhotos.styled';

const AuthPhotos = () => {
  return (
    <>
      <PhotosWrapper>
        <BoxFirst>
          <ImgFirst src={Clean} alt="prize" />
        </BoxFirst>
        <BoxSecond>
          <ImgSecond src={Prize} alt="clean girl" />
        </BoxSecond>
        <BoxThird>
          <ImgThird src={Robo} alt="robo" />
        </BoxThird>
        <BoxFourth>
          <ImgFourth src={CleanGigl} alt="clean" />
        </BoxFourth>
      </PhotosWrapper>
    </>
  );
};

export default AuthPhotos;
