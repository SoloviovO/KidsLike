import styled from 'styled-components';

export const AuthWrapper = styled.div`
  margin: 0 auto;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 167px;
  }
`;

export const FormBox = styled.div`
  margin: 0 auto;
  padding: 40px 0 60px;

  width: 280px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
    width: 394px;
  }
`;
