import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { RxCross1 } from 'react-icons/rx';

// import { logOutUser } from 'redux/Auth/AuthOperations';

import { Backdrop, CloseButton, Modal } from './CongratsModal.styled';
// import { useDispatch } from 'react-redux';
import ModalContentGetGifts from 'components/Awards/ModalContentGetGifts/ModalContentGetGifts';

const modalEl = document.querySelector('#modal-root');

const CongratsModal = ({ onClose, awards }) => {
  // const dispatch = useDispatch();

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
    <Backdrop
      className={`${isModalOpen ? 'Open' : ''}`}
      onClick={handleBackdropClick}
      tabIndex={-1}
      ref={modalRef}
    >
      <Modal className={`${isModalOpen ? 'Open' : ''}`} tabIndex={0}>
        <CloseButton
          aria-label="Закрити"
          type="button"
          className="CloseButton"
          onClick={handleClose}
        >
          <RxCross1 className="CloseIcon" />
        </CloseButton>
        <ModalContentGetGifts awards={awards} />
      </Modal>
    </Backdrop>,
    modalEl
  );
};

export default CongratsModal;
