import React from "react";
import * as S from "./style";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export function SktHotel() {
  return (
    <S.SKTHotel>
      <S.LeftSkt>
        <LeftSide />
      </S.LeftSkt>

      <S.RightSkt>
        <RightSide />
      </S.RightSkt>
    </S.SKTHotel>
  );
}
