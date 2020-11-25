// import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

export function News(props) {
  const { date, postTitle, content } = props;

  return (
    <S.MainLatest>
      <S.Date>{date}</S.Date>
      <S.TitleNews>{postTitle}</S.TitleNews>
      <S.ContentNews>{content}</S.ContentNews>
      <Link to="#" className="LinkPost">
        <span>read more..</span>
      </Link>
    </S.MainLatest>
  );
}
