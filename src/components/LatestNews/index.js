// import React from "react";
import * as F from "./style";
import * as S from "../FavoriteCard/style";
import post1 from "../../assets/img/post-img1.jpg";
import post2 from "../../assets/img/post-img3.jpg";
import post3 from "../../assets/img/post-img2.jpg";
import { News } from "./News";

export function LatestNews() {
  return (
    <F.newsMain>
      <S.FavoriteTitle primary>FROM THE BLOG</S.FavoriteTitle>
      <S.TitleRoom primary>Latest News</S.TitleRoom>
      <F.mainPost>
        <F.imgPost src={post1} alt="img" />
        <News
          date="September 23,2019"
          postTitle="Natoque Penatibus Magnis"
          content="
Donec faucibus dolor sit amet consequati viverra. Aliquam in commodo quam. In sit amet ante sit..."
        />
        <F.imgPost src={post2} alt="img" />
      </F.mainPost>
      <F.mainPost>
        <News
          date="September 23,2019"
          postTitle="Elementum Pretium"
          content="
Donec faucibus dolor sit amet consequati viverra. Aliquam in commodo quam. In sit amet ante sit..."
        />
        <F.imgPost src={post3} alt="img" />
        <News
          date="September 23,2019"
          postTitle="Mauris Ultrices Lobortis"
          content="
Donec faucibus dolor sit amet consequati viverra. Aliquam in commodo quam. In sit amet ante sit..."
        />
      </F.mainPost>
    </F.newsMain>
  );
}
