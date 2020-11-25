// import React from "react";
import * as S from "./style";
import { LinkFooter } from "./LinkFooter";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <S.MainFooter>
      <S.SktHotel>SKT Hotel</S.SktHotel>
      <LinkFooter />
      <SocialIcon />
      <S.CopyRight>
        © 2019 SKT Ele Hotel. All Rights Reserved - Powered by sktthemes.org
      </S.CopyRight>
    </S.MainFooter>
  );
}
