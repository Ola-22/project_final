import React, { useState, useEffect } from "react";
import { Arrows } from "./Arrows";
import { CarouselCard } from "./CarouselCard";
import * as S from "./style";
import * as F from "../FavoriteCard/style";

export function Testimonial() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      content:
        "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
      authorName: "JENNIFER DOE",
      authorCredentials: "Happy Customer",
      link:
        "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team3-150x150.jpg",
    },
    {
      content:
        "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
      authorName: "JOHN DOE",
      authorCredentials: "Happy Customer",
      link:
        "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team2-150x150.jpg",
    },
    {
      content:
        "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
      authorName: "SARA DOE",
      authorCredentials: "Happy Customer",
      link:
        "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team1-150x150.jpg",
    },
  ];
  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 8000);
  });

  return (
    <S.slideMain>
      <div className="titleTest">
        <F.FavoriteTitle titleFav>WHAT OUR CUSTOMERS SAY</F.FavoriteTitle>
      </div>
      <F.TitleRoom>Customer Feedback</F.TitleRoom>
      <CarouselCard
        image={slides[currentSlide]}
        slideNext={slideNext}
        slidePrev={slidePrev}
      />
      <Arrows slideNext={slideNext} slidePrev={slidePrev} />

      {/* <CarouselCard
        image={slides[currentSlide]}
        slideNext={slideNext}
        slidePrev={slidePrev}
      /> */}
    </S.slideMain>
  );
}
