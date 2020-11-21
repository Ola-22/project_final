import React from "react";
import "./style.css";

export function Button(props) {
  const { name, onClick, labelTxt } = props;
  return (
    <button className="btn" name={name} onClick={onClick}>
      {labelTxt}
    </button>
  );
}
