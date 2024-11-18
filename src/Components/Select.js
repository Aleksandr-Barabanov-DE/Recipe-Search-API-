import React from "react";

const Select = ({ label, value, onChange, options, id }) => {
  return (
    <div>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <select id={id} value={value} onChange={onChange} aria-label={label}>
        <option value="">-- Select {label} --</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
