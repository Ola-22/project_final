import React from "react";
import imgRight from "../../../assets/img/right.png";
import * as S from "./style";
import ScrollAnimation from "react-animate-on-scroll";

export function RightSide() {
  return (
    <>
      <ScrollAnimation
        animateIn="bounceInRight"
        // animateOut="bounceOutLeft"
        animateOnce={true}
        delay={500}
      >
        <S.RightImg src={imgRight} alt="imgHotel" />
      </ScrollAnimation>
    </>
  );
}
