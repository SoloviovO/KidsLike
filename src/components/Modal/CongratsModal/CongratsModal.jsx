import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';

import ModalContentGetGifts from 'components/Awards/ModalContentGetGifts/ModalContentGetGifts';

import style from '../ModalLogout/ModalLogout.module.scss';

const modalEl = document.querySelector('#modal-root');

const CongratsModal = ({ onClose, awards }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        setModalOpen(false);
        setTimeout(onClose, 300);
      }
    };

    const body = document.querySelector('body');

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollBarWidth}px`;

    window.addEventListener('keydown', handleKeydown);
    setModalOpen(true);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      body.style.overflow = '';
      body.style.paddingRight = '';
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
      setTimeout(onClose, 300);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);

  return createPortal(
    <div
      className={`${style.Backdrop} ${isModalOpen ? style.Open : ''}`}
      onClick={handleBackdropClick}
      tabIndex={-1}
      ref={modalRef}
    >
      <div
        className={`${style.Modal} ${isModalOpen ? style.Open : ''}`}
        tabIndex={0}
      >
        <button
          aria-label="Закрити"
          type="button"
          className={style.CloseButton}
          onClick={handleClose}
        >
          <RxCross1 className={style.CloseButtonIcon} />
        </button>
        <ModalContentGetGifts awards={awards} />
      </div>
    </div>,
    modalEl
  );
};

export default CongratsModal;
