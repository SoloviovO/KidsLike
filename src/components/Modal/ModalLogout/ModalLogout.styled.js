import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0s linear 0.3s;

  &.Open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease;
  }
`;

export const Modal = styled.div`
  padding: 60px 20px;

  position: relative;

  background-color: #ffffff;
  border-radius: 18px;

  opacity: 0;
  transform: scale(0);
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0s linear 0.3s, transform 0.3s ease;

  @media screen and (min-width: 768px) {
    padding: 70px 100px;
  }

  &.Open {
    opacity: 1;
    transform: scale(1);
    visibility: visible;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;

    width: 28px;
    height: 28px;
  }
`;

export const TextModal = styled.div`
  margin-bottom: 44px;

  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #a6abb9;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;

    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ModalButton = styled.button`
  padding: 0;

  width: 125px;
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
    width: 153px;
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
    @media screen and (min-width: 1280px) {
      margin-right: 20px;
    }
  }
`;
