import React from "react";
import * as S from "../Header/style";
export function SliderContent() {
  return (
    <div className="content">
      <h1 className="title">WELCOME TO</h1>
      <p className="slide_content">Luxury Hotel</p>
      <S.MenuBook to="/Reservation" primary="true" colorbtn="true" />
      <S.MenuBook primary colorBtn btnmargin>
        Book now!
      </S.MenuBook>
    </div>
  );
}
