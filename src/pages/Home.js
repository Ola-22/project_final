import React from "react";
// import Header from "../components/Header";
import Slider from "../components/Slider";
import { SktHotel } from "../components/SktHotel";
import { FavoriteCard } from "../components/FavoriteCard";
import { Facilities } from "../components/Facilities";
import { Testimonial } from "../components/Testimonial";
import { LatestNews } from "../components/LatestNews";
import { SliderFooter } from "../components/SliderFooter";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="slider">
        <Slider />
      </div>
      <SktHotel />
      <FavoriteCard />
      <Facilities />
      <Testimonial />
      <LatestNews />
      <SliderFooter />
      <Footer />
    </>
  );
};
