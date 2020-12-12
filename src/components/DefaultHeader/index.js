import React from "react";
import img from "../../assets/img/default.jpg";
import * as S from "./style";

export function DefaultHeader() {
  return <S.Image src={img} alt={img} />;
}
