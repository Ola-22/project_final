import React from "react";
import Slider from "../components/Slider";
import { SktHotel } from "../components/SktHotel";
import { FavoriteCard } from "../components/FavoriteCard";
import { Facilities } from "../components/Facilities";
import { LatestNews } from "../components/LatestNews";
import { SliderFooter } from "../components/SliderFooter";
import { Footer } from "../components/Footer";
import SlideMain from "../components/SlideTest/SlideMain";

export const Home = () => {
  return (
    <>
      <div className="slider">
        <Slider />
      </div>
      <SktHotel />
      <FavoriteCard />
      <Facilities />
      <SlideMain />
      <LatestNews />
      <SliderFooter />
      <Footer />
    </>
  );
};
