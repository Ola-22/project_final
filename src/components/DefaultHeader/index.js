import React from "react";
import img from "../../assets/img/default.jpg";
import * as S from "./style";

export function DefaultHeader() {
  return <S.image src={img} alt={img} />;
}
