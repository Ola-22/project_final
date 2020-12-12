import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/img/slider1.jpg";
import img2 from "../../assets/img/slider2.jpg";
import img3 from "../../assets/img/slider3.jpg";
import "./style.css";
import SliderContent from "./SliderContent";
import { ImgSvg } from "./ImgSvg";

export default function CarouselComp() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <SliderContent />
          <img src={img1} alt="img" />
        </div>
        <div>
          <SliderContent />
          <img src={img2} alt="img" />
        </div>
        <div>
          <SliderContent />
          <img src={img3} alt="img" />
        </div>
      </Carousel>
      <ImgSvg />
    </div>
  );
}
