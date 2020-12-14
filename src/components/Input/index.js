import React from "react";

export function InputBox(props) {
  const { name, type, placeholder, id, className, onChange, value } = props;
  return (
    <div className="input">
      <input
        inputwidth="true"
        name={name}
        type={type}
        id={id}
        className={className}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
