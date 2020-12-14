import React from "react";

const Slider = (props) => {
  const btnContainer = {
    display: "inline-block",
    float: "right",
  };
  const btn = {
    border: "none",
    background: "blue",
    color: "white",
    fontSize: "22px",
    padding: "5px 10px",
    borderRadius: "10px",
    margin: "0 10px",
  };
  return (
    <div>
      <img src={props.image.link} alt="Sliderr_image" />
      <h1>
        {props.image.title}
        <span style={btnContainer}>
          <button style={btn} onClick={props.slidePrev}>
            {"<"} Prevs
          </button>
          |
          <button style={btn} onClick={props.slideNext}>
            {">"} Next
          </button>
        </span>
      </h1>
    </div>
  );
};

export default Slider;
