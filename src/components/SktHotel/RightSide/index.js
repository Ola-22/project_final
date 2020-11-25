import React from "react";
import imgRight from "../../../assets/img/right.png";
import { Animated } from "react-animated-css";

export function RightSide() {
  return (
    <>
      {/* <img src={imgRight} alt="imgHotel" /> */}
      <Animated
        animationIn="fadeInLeft"
        animationOut="bounce"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <img src={imgRight} alt="imgHotel" />
      </Animated>
    </>
  );
}
