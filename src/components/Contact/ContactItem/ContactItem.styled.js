import styled from 'styled-components';
import { ImGithub, ImLinkedin, ImMail4, ImTelegram } from 'react-icons/im';

export const ContactItems = styled.li`
  max-width: 280px;
  background: #ffffff;
  box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    max-width: 336px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 288px;
  }

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const ContactImg = styled.img`
  width: 100%;
  max-height: 246px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media screen and (min-width: 768px) {
    max-height: 320px;
  }
  @media screen and (min-width: 1280px) {
    max-height: 257px;
  }
`;

export const ContactInfo = styled.div`
  padding: 20px;
`;

export const ContactName = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
`;

export const ContactRule = styled.p`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: #858598;
`;

export const ContactAbout = styled.p`
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const ContactSocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const ContactTelegtam = styled(ImTelegram)`
  width: 35px;
  height: 35px;
  fill: #ffbc33;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #8ec63f;
  }
`;

export const ContactMail = styled(ImMail4)`
  width: 35px;
  height: 35px;
  fill: #ffbc33;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #8ec63f;
  }
`;

export const ContactGit = styled(ImGithub)`
  width: 35px;
  height: 35px;
  fill: #ffbc33;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #8ec63f;
  }
`;

export const ContactLinkedin = styled(ImLinkedin)`
  width: 35px;
  height: 35px;
  fill: #ffbc33;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #8ec63f;
  }
`;
