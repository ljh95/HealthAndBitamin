import React from 'react';
import './RadioButton.scss';

export default function RadioButton({
  changeCurrentDisplay,
  id,
  desc,
  name,
  defaultId,
}) {
  const click = () => {
    changeCurrentDisplay(id);
  };

  return (
    <span className="RadioButton">
      <input
        className="radio"
        type="radio"
        id={id}
        value={id}
        defaultChecked={id === defaultId}
        name={name}
        onClick={click}
      />
      <label className="radioLabel" htmlFor={id}>
        {desc}
      </label>
    </span>
  );
}
