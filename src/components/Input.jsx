// src/components/Input.jsx
import React from "react";

const Input = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  className = "",
  ...props
}) => {
  const inputClasses = `input-field ${error ? "input-field-error" : ""}`;

  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name || id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        {...props}
      />
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};

export default Input;
