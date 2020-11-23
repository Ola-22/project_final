import React from "react";
import * as S from "./style";
import * as F from "../../Header/style";

export function Card(props) {
  const { src, title, content } = props;

  return (
    <S.FavoriteCard>
      <img src={src} alt="img" />
      <S.FavoriteTitle>{title}</S.FavoriteTitle>
      <S.FavoriteContent>{content}</S.FavoriteContent>
      <S.FavoriteBtn>
        <F.Linkmenu ground element>
          Book now!
        </F.Linkmenu>
      </S.FavoriteBtn>
    </S.FavoriteCard>
  );
}
