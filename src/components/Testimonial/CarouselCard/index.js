// import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export function CarouselCard({ quote }) {
  return (
    <S.CarouselCard>
      <S.fontquote>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </S.fontquote>
      <S.content>{quote.content}</S.content>
      <S.authorMain>
        <div>
          <S.testImg src={quote.imgSrc} alt="img" />
        </div>
        <S.Author>
          <S.TestimonialUser>{quote.authorName}</S.TestimonialUser>
          <S.category>{quote.authorCredentials}</S.category>
        </S.Author>
      </S.authorMain>
    </S.CarouselCard>
  );
}
