import React from "react";
import * as S from "../Header/style";

export default function Slider() {
  return (
    <div className="content">
      <h1 className="title">WELCOME TO</h1>
      <p className="slide_content">Luxury Hotel</p>
      <S.MenuBook to="/Reservation" primary="true" colorbtn="true">
        Book now!
      </S.MenuBook>
    </div>
  );
}
