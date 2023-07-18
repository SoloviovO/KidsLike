import React, { useState } from 'react';

import iconAddTasks from 'images/icons/icon-addTasks.svg';

import NewTaskModal from 'components/Modal/NewTaskModal/NewTaskModal';

import style from './AddCustomTask.module.scss';

const AddCustomTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={style.AddTaskBox}>
        <p className={style.AddTaskText}>
          If you want to get more prizes - add tasks :)
        </p>
        <button
          className={style.AddTaskBtn}
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <img src={iconAddTasks} alt="iconAddTasks" />
        </button>
      </div>
      {isOpen && (
        <NewTaskModal open={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default AddCustomTask;
