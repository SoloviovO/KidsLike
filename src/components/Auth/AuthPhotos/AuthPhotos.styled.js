import styled from 'styled-components';

export const PhotosWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    width: 50%;
    overflow: visible;
  }
`;

export const BoxFirst = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 80px;
    left: -7px;
    width: 301px;
    height: 247px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;

    width: 372px;
    height: 306px;
  }
`;

export const BoxSecond = styled.div`
  width: 290px;
  height: 98px;

  @media screen and (min-width: 768px) {
    margin-left: -5px;
    position: absolute;
    z-index: 2;
    display: block;
    top: 55px;
    left: 257px;

    width: 222px;
    height: 98px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    z-index: 0;
    top: 148px;
    left: 237px;

    width: 372px;
    height: 306px;
  }
`;

export const BoxThird = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 326px;
    left: 10px;

    width: 372px;
    height: 306px;
  }
  @media screen and (min-width: 1280px) {
    display: block;

    position: absolute;
    top: 326px;
    left: 0;
  }
`;

export const BoxFourth = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    transform: translate(77%, 10%);

    width: 297px;
    height: 239px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    transform: translate(0);

    top: 442px;
    left: 237px;

    width: 359px;
    height: 290px;
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: contain;
`;
