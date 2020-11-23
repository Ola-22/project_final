// import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

export function News(props) {
  const { date, postTitle, content } = props;

  return (
    <S.mainLatest>
      <S.date>{date}</S.date>
      <S.titleNews>{postTitle}</S.titleNews>
      <S.contentNews>{content}</S.contentNews>

      <Link to="#" className="linkpost">
        <span>read more..</span>
      </Link>
    </S.mainLatest>
  );
}
