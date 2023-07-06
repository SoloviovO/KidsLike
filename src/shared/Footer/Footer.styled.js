import styled from 'styled-components';

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogoText = styled.p`
  color: #858598;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
`;
