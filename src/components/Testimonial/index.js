import React, { useState, useEffect } from "react";
import { Arrows } from "./Arrows";
import { CarouselCard } from "./CarouselCard";
import * as S from "./style";
import * as F from "../FavoriteCard/style";

export function Testimonial() {
  const quotes = [
    {
      content:
        "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
      authorName: "JENNIFER DOE",
      authorCredentials: "Happy Customer",
      imgSrc:
        "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team3-150x150.jpg",
    },
    {
      content:
        "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
      authorName: "JOHN DOE",
      authorCredentials: "Happy Customer",
      imgSrc:
        "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team2-150x150.jpg",
    },
    {
      content:
        "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
      authorName: "SARA DOE",
      authorCredentials: "Happy Customer",
      imgSrc:
        "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team1-150x150.jpg",
    },
  ];
  const [quoteData, getQuoteData] = useState(quotes);
  const [current, setCurrent] = useState(0);
  const [quote, getQuote] = useState(quoteData[current]);

  useEffect(() => getQuote(quoteData[current]), [current, quote, quoteData]);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getQuote(quoteData[current]);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [current, quote, quoteData]);

  const nextQuote = () => {
    current === quoteData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const prevQuote = () => {
    current === 0 ? setCurrent(quoteData.length - 1) : setCurrent(current - 1);
  };

  return (
    <S.slideMain>
      <div className="titleTest">
        <F.FavoriteTitle titleFav>WHAT OUR CUSTOMERS SAY</F.FavoriteTitle>
      </div>
      <F.TitleRoom>Customer Feedback</F.TitleRoom>
      <CarouselCard quote={quote} />
      <Arrows nextQuote={nextQuote} prevQuote={prevQuote} />
    </S.slideMain>
  );
}
