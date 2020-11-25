// import React from "react";
import * as S from "./style";

export function ContactInfo() {
  return (
    <S.MainInfo>
      <S.InfoTitle>Contact Info</S.InfoTitle>
      <S.InfoContent>Donec ultricies mattis nulla Australia</S.InfoContent>
      <S.InfoContent>0789 256 321</S.InfoContent>
      <S.Demo href="mailto:info@companyname.com">info@companyname.com</S.Demo>
      <p>
        <S.Demo href="http://demo.com" target="_blank">
          http://demo.com
        </S.Demo>
      </p>
    </S.MainInfo>
  );
}
