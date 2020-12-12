import React from "react";
import * as S from "./style";
import * as F from "../../Header/style";

export function Card(props) {
  const { src, title, content } = props;

  return (
    <S.FavoriteCard>
      <S.CardImg src={src} alt="img" />
      <S.FavoriteTitle>{title}</S.FavoriteTitle>
      <S.FavoriteContent>{content}</S.FavoriteContent>
      <F.MenuBook
        to="/Reservation"
        element="true"
        groundcolor="true"
        className="menuBook"
      >
        Book now!
      </F.MenuBook>
    </S.FavoriteCard>
  );
}
