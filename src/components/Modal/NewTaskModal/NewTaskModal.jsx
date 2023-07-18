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
import styles from './NewTaskModal.module.scss';

const modalEl = document.querySelector('#modal-root');

const NewTaskModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const imageInputRef = useRef(null);

  const [taskName, setTaskName] = useState('');
  const [reward, setReward] = useState('');
  const [image, setImage] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const onHandleChangeTaskName = event => {
    setTaskName(event.target.value);
  };

  const onHandleChangeReward = event => {
    setReward(event.target.value);
  };

  const onHandleChangeImage = event => {
    setImage(event.target.files[0]);
  };

  const onHandleSubmit = async event => {
    event.preventDefault();

    if (!taskName || !reward || !image) {
      return toast.warning('Select file, add title and points!');
    }

    if (image.size > 1024000) {
      return toast.warning('Too big size image!');
    }

    if (reward < 1) {
      return toast.warning('Must be a positive number!');
    }

    if (taskName.length < 2) {
      return toast.warning('Title is short!');
    }

    const body = new FormData();

    body.append('title', taskName);
    body.append('reward', reward);
    body.append('file', image);

    try {
      await dispatch(createTask(body)).unwrap();
      toast.success('Add new task!');
    } catch (error) {
      toast.error(error);
    }

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
        className={`${styles.Modal} ${isModalOpen ? styles.Open : ''}`}
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
            <img
              className={styles.ModalImage}
              src={modalRobot}
              alt="modal robo"
            />
          </picture>
          <button
            className={styles.ModalBtnAdd}
            type="button"
            onClick={() => imageInputRef.current?.click()}
          >
            <img className={styles.ModalImageAdd} src={modalImage} alt="file" />
          </button>
          <form className={styles.ModalForm} onSubmit={onHandleSubmit}>
            <input
              type="file"
              hidden
              ref={imageInputRef}
              onChange={onHandleChangeImage}
            />
            <div className={styles.ModalAddTaskBox}>
              <label className={styles.ModalLabel}>
                <img
                  className={styles.ModalInputImg}
                  src={modalEditInput}
                  alt="modal Edit Input"
                />
                <input
                  className={styles.ModalInput}
                  type="text"
                  placeholder="Add task..."
                  value={taskName}
                  onChange={onHandleChangeTaskName}
                />
              </label>
            </div>
            <div className={styles.ModalAddTaskBox}>
              <label className={styles.ModalLabel}>
                <img
                  className={styles.ModalInputImg}
                  src={modalEditInput}
                  alt="modal Edit Input"
                />
                <input
                  className={styles.ModalInput}
                  type="number"
                  placeholder="Add points..."
                  value={reward}
                  onChange={onHandleChangeReward}
                />
              </label>
            </div>
            <button className={styles.ModalButton} type="submit">
              Ок
            </button>
          </form>
        </div>
      </div>
    </div>,
    modalEl
  );
};

export default NewTaskModal;
