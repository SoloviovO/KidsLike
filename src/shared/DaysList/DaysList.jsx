import React from 'react';

import CheckBox from 'shared/CheckBox/CheckBox';

const DaysList = ({ onChange, selectedRadio, _id }) => {
  return (
    <div>
      <ul>
        {selectedRadio.map(({ day, isChecked, isDisabled }) => (
          <li key={day}>
            <CheckBox
              id={_id}
              name={day}
              value={day}
              label={day}
              checked={isChecked}
              disabled={isDisabled}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaysList;
