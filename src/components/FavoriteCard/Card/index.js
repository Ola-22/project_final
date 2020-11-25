import React from "react";
import * as S from "./style";
import * as F from "../../Header/style";
import { Link } from "react-router-dom";

export function Card(props) {
  const { src, title, content } = props;

  return (
    <S.FavoriteCard>
      <img src={src} alt="img" />
      <S.FavoriteTitle>{title}</S.FavoriteTitle>
      <S.FavoriteContent>{content}</S.FavoriteContent>
      <S.FavoriteBtn>
        <Link to="/Reservation">
          <F.Linkmenu ground element>
            Book now!
          </F.Linkmenu>
        </Link>
      </S.FavoriteBtn>
    </S.FavoriteCard>
  );
}
