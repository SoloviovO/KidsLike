import styled from 'styled-components';

export const AuthBox = styled.div`
  width: 320px;
  height: 100%;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 10px 0;
  }
`;

export const AuthWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 160px;
  }
`;
