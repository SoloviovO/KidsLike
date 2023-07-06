import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  width: 100%;
  width: 320px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;

    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;

    width: 1280px;
  }
`;
