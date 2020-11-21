import React from "react";
import Slider from "react-slick";
import partner1 from "../../assets/img/partner1.jpg";
import partner2 from "../../assets/img/partner2.jpg";
import partner3 from "../../assets/img/partner3.jpg";
import partner4 from "../../assets/img/partner4.jpg";
import partner5 from "../../assets/img/partner5.jpg";
import partner6 from "../../assets/img/partner6.jpg";
// import "./style";

export const SliderFooter = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {/* <div className="mainslider"> */}
      <div>
        <img className="img" src={partner1} alt="img" />
      </div>
      <img className="img" src={partner2} alt="img2" />
      <img className="img" src={partner3} alt="img3" />
      <img className="img" src={partner4} alt="img4" />
      <img className="img" src={partner5} alt="img5" />
      <img className="img" src={partner6} alt="img6" />
      {/* <img className="img" src={partner1} alt="img" />
      <img className="img" src={partner2} alt="img2" />
      <img className="img" src={partner3} alt="img3" />
      <img className="img" src={partner4} alt="img4" />
      <img className="img" src={partner5} alt="img5" />
      <img className="img" src={partner6} alt="img6" /> */}
      {/* </div> */}
    </Slider>
  );
};
