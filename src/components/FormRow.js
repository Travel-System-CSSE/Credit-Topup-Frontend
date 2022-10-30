import React from "react";

const FormRow = ({ type, name, value, handleChange, placeHolder }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {placeHolder}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormRow;
