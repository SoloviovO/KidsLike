import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 40px 0 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 40px 0 40px;
  }
`;

export const ContactTitle = styled.h2`
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

export const ContactSubtitle = styled.h3`
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
