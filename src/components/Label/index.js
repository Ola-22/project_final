import React from "react";

export function Label(props) {
  const { LabelTxt, forLabel, className } = props;
  return (
    <div className="input">
      <label className={className} for={forLabel}>
        {LabelTxt}
      </label>
    </div>
  );
}
