import React from 'react';

const CheckBox = ({ value, label, checked, _id, onChange, disabled }) => {
  return (
    <div>
      <label htmlFor={_id}>
        <input
          id={_id}
          name={_id}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <span></span>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
