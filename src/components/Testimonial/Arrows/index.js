import React from "react";
import * as S from "./style";

export function Arrows({ nextQuote, prevQuote }) {
  return (
    <>
      <S.prevQuote onClick={prevQuote} className="prev" id="prev">
        &#10094;
      </S.prevQuote>
      <S.nextQuote onClick={nextQuote} className="next" id="next">
        &#10095;
      </S.nextQuote>
    </>
  );
}
