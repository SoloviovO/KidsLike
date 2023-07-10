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
