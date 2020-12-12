import React from "react";
import * as S from "./style";
import { SwipeableTextMobileStepper } from "./index";
import * as F from "../FavoriteCard/style";

function SlideMain() {
  return (
    <S.slideMain>
      <div className="titleTest">
        <F.FavoriteTitle titleFav>WHAT OUR CUSTOMERS SAY</F.FavoriteTitle>
      </div>
      <F.TitleRoom>Customer Feedback</F.TitleRoom>
      <SwipeableTextMobileStepper />
    </S.slideMain>
  );
}

export default SlideMain;
