import React from "react";

export function InputBox(props) {
  const { name, type, placeholder, id, className } = props;
  return (
    <div className="input">
      <input
        inputWidth
        name={name}
        type={type}
        id={id}
        className={className}
        // onChange={onChange}
        // value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
