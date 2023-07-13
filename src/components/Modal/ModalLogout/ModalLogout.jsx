import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';

import { logOutUser } from 'redux/Auth/AuthOperations';

import style from './ModalLogout.module.scss';

const modalEl = document.querySelector('#modal-root');

const ModalLogout = ({ onClose }) => {
  const dispatch = useDispatch();

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
        <p className={style.TextModal}>Already leaving?</p>
        <button
          className={style.ModalButton}
          type="button"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className={style.ModalButton}
          type="button"
          onClick={() => dispatch(logOutUser())}
        >
          Yes
        </button>
      </div>
    </div>,
    modalEl
  );
};

export default ModalLogout;
