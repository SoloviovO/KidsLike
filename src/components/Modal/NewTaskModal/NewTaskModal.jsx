import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';

import modalRobot from 'images/modal-img/modal-robot.png';
import modalRobotRet from 'images/modal-img/modal-robot-2x.png';
import modalImage from 'images/modal-image.svg';
import modalEditInput from 'images/edit-log.svg';
import { createTask } from 'redux/Planning/PlanningOperations';

import style from '../ModalLogout/ModalLogout.module.scss';

const modalEl = document.querySelector('#modal-root');

const NewTaskModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const imageInputRef = useRef(null);

  const [taskName, setTaskName] = useState('');
  const [reward, setReward] = useState('');
  const [image, setImage] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const onHandleChangeTaskName = e => {
    setTaskName(e.target.value);
  };

  const onHandleChangeReward = e => {
    setReward(e.target.value);
  };

  const onHandleChangeImage = e => {
    setImage(e.target.files[0]);
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (image.size > 2048000) {
      return toast.error('Too big size image');
    }

    const body = new FormData();

    body.append('title', taskName);
    body.append('reward', reward);
    body.append('file', image);

    dispatch(createTask(body));

    setTaskName('');
    setReward('');
  };

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
        <div>
          <picture>
            <source srcSet={`${modalRobot}, ${modalRobotRet} 2x`} />
            <img src={modalRobot} alt="modal robo" />
          </picture>

          <button type="button" onClick={() => imageInputRef.current?.click()}>
            <img src={modalImage} alt="file" />
          </button>
          <form onSubmit={onHandleSubmit}>
            <input
              type="file"
              hidden
              ref={imageInputRef}
              onChange={onHandleChangeImage}
            />
            <div>
              <label>
                <img src={modalEditInput} alt="modal Edit Input" />
                <input
                  type="text"
                  placeholder="Add task..."
                  value={taskName}
                  onChange={onHandleChangeTaskName}
                />
              </label>
            </div>
            <div>
              <label>
                <img src={modalEditInput} alt="modal Edit Input" />
                <input
                  type="number"
                  placeholder="Add points..."
                  value={reward}
                  onChange={onHandleChangeReward}
                />
              </label>
            </div>
            <button type="submit">Ок</button>
          </form>
        </div>
      </div>
    </div>,
    modalEl
  );
};

export default NewTaskModal;
