import styled from 'styled-components';

export const FormBox = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0 60px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const PageTitle = styled.h2`
  margin-bottom: 35px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 28px;
    line-height: 34px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 30px;
    line-height: 37px;
    text-align: start;
  }
`;

export const PageForm = styled.form`
  @media screen and (min-width: 768px) {
    padding: 40px 32px;
    background: #ffffff;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px;
  }
`;

export const FormTitle = styled.p`
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #858598;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const LabelRequired = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #eb5757;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const FormLabel = styled.label`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #858598;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const FormInputEmail = styled.input`
  padding: 12px 22px 12px 8px;
  display: block;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #a6abb9;
  background: #f6f7fb;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.15);
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
  &:hover,
  &:active,
  &:focus {
    outline: solid 1px #ffbc33;
  }
`;

export const FormInputPassword = styled.input`
  padding: 12px 22px 12px 8px;
  display: block;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #a6abb9;
  background: #f6f7fb;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.15);
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
  &:hover,
  &:active,
  &:focus {
    outline: solid 1px #ffbc33;
  }

  &::placeholder {
    position: absolute;
    bottom: 4px;
    margin-right: 12px;
    font-weight: 400;
    font-size: 28px;
    line-height: 54px;
    display: flex;
    align-items: center;

    color: #000000;
  }
`;

export const FormValidError = styled.div`
  position: absolute;
  bottom: -15px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: #eb5757;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const FormButton = styled.button`
  width: 135px;
  height: 48px;
  border: none;
  background-color: #ffbc33;
  border-radius: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #fafafa;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));

  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 152px;
  }

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #8ec63f;
  }

  &:not(:last-child) {
    margin-right: 10px;
    @media screen and (min-width: 768px) {
      margin-right: 16px;
    }
  }
`;
