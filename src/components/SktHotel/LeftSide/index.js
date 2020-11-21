import React from "react";
import * as S from "./style";
import * as F from "../../Header/style";

export function LeftSide(classes) {
  return (
    <>
      <S.SktTitle>Welcome to Our</S.SktTitle>
      <S.SktTitleTwo>SKT Hotel</S.SktTitleTwo>
      <S.SktContent>
        Nunc id turpis ligula. Orci varius natoque penatibus et magnis
        disparmontes,
        <br />
        nascetur ridiculus mus. Nulla eu ligula vitae risus varius tincidunacus
        aliquet
        <br />
        vitae aliquet ut, elementum a massa. Pellentesqu elit libero, fermentum
        met
        <br />
        porta ac, fringilla at erat.
      </S.SktContent>
      <S.SktContent>
        Nunc bibendum enim vel arcu rutrum semper vtae risus varius tincidunt.
        In
        <br />
        lacus nibh, aliquet vitae aliquet ut, elementum.
      </S.SktContent>
      <F.Linkmenu element>Book now!</F.Linkmenu>
    </>
  );
}
