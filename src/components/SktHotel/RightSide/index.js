import React from "react";
import imgRight from "../../../assets/img/right.png";
import { Animated } from "react-animated-css";
import * as S from "./style";

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
        <S.RightImg src={imgRight} alt="imgHotel" />
      </Animated>
    </>
  );
}
