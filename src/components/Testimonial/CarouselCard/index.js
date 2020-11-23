// import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import team1 from "../../../assets/img/team1.jpg";
import team2 from "../../../assets/img/team2.jpg";
import team3 from "../../../assets/img/team3.jpg";
// // import Slider from "react-slick";

// export function CarouselCard(props) {
//   const { content, src, authorName, authorCredentials } = props;

//   return (
//     <S.CarouselCard>
//       <S.fontquote>
//         <FontAwesomeIcon icon={faQuoteLeft} />
//       </S.fontquote>
//       <S.content>{content}</S.content>
//       <S.authorMain>
//         <div>
//           <S.testImg src={src} alt={src} />
//         </div>
//         <div>
//           <S.TestimonialUser>{authorName}</S.TestimonialUser>
//           <S.category>{authorCredentials}</S.category>
//         </div>
//       </S.authorMain>
//     </S.CarouselCard>
//   );
// }
import React from "react";

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
        <div>
          <S.TestimonialUser>{quote.authorName}</S.TestimonialUser>
          <S.category>{quote.authorCredentials}</S.category>
        </div>
      </S.authorMain>
    </S.CarouselCard>
  );
}
