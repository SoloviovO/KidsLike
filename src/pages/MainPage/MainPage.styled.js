import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const MainBox = styled.div`
  padding-top: 32px;

  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    padding-top: 40px;

    background-color: #fafafa;
  }
`;
