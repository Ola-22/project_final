import React from "react";
import Slider from "react-slick";
import partner1 from "../../assets/img/partner1.jpg";
import partner2 from "../../assets/img/partner2.jpg";
import partner3 from "../../assets/img/partner3.jpg";
import partner4 from "../../assets/img/partner4.jpg";
import partner5 from "../../assets/img/partner5.jpg";
import partner6 from "../../assets/img/partner6.jpg";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

export function SliderFooter() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <ScrollAnimation
      animateIn="zoomInDown

      "
      // animateOut="backInDown"
      animateOnce={true}
      delay={500}
    >
      <div className="MainSlider">
        <Slider {...settings}>
          <div>
            <img src={partner1} alt="img" />
          </div>
          <div>
            <img src={partner2} alt="img" />
          </div>
          <div>
            <img src={partner3} alt="img" />
          </div>
          <div>
            <img src={partner4} alt="img" />
          </div>
          <div>
            <img src={partner5} alt="img" />
          </div>
          <div>
            <img src={partner6} alt="img" />
          </div>
        </Slider>
      </div>
    </ScrollAnimation>
  );
}
