import React, { useState } from 'react';

import iconAddTasks from 'images/icon-addTasks.svg';
import NewTaskModal from 'components/Modal/NewTaskModal/NewTaskModal';

const AddCustomTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <p>If you want to get more prizes - add tasks :)</p>
        <button type="button" onClick={() => setIsOpen(true)}>
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
