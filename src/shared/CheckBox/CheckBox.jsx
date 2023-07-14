import React from 'react';

import style from './CheckBox.module.scss';

const CheckBox = ({ value, label, checked, _id, onChange, disabled }) => {
  return (
    <div className={style.CheckBoxWrapp}>
      <label className={style.CheckBoxLabel} htmlFor={_id}>
        <input
          className={style.CheckBoxInput}
          id={_id}
          name={_id}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <span className={style.CheckBoxIcon}></span>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
