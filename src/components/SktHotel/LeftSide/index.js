import React from "react";
import * as S from "./style";
import * as F from "../../Header/style";
import ScrollAnimation from "react-animate-on-scroll";

export function LeftSide() {
  return (
    <>
      <ScrollAnimation
        animateIn="bounceInLeft"
        // animateOut="bounceOutRight"
        animateOnce={true}
        delay={500}
      >
        <S.SktTitle>Welcome to Our</S.SktTitle>
        <S.SktTitleTwo>SKT Hotel</S.SktTitleTwo>
        <S.SktContent>
          Nunc id turpis ligula. Orci varius natoque penatibus et magnis
          disparmontes, nascetur ridiculus mus. Nulla eu ligula vitae risus
          varius tincidunacus aliquet vitae aliquet ut, elementum a massa.
          Pellentesqu elit libero, fermentum met porta ac, fringilla at erat.
        </S.SktContent>
        <S.SktContent>
          Nunc bibendum enim vel arcu rutrum semper vtae risus varius tincidunt.
          In
          <br />
          lacus nibh, aliquet vitae aliquet ut, elementum.
        </S.SktContent>
        {/* <Link to="/Reservation"> */}
        <F.MenuBook to="/Reservation" element="true">
          Book now!
        </F.MenuBook>
      </ScrollAnimation>
      {/* </Link> */}
    </>
  );
}
