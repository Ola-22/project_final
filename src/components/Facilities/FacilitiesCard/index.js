import React from "react";
import * as S from "./style";

export function FacilitiesCard(props) {
  const { src, title, content } = props;

  return (
    <S.CardMain>
      <div>
        <img src={src} alt="img" />
      </div>
      <div>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardContent>{content}</S.CardContent>
      </div>
    </S.CardMain>
  );
}
