import React, { useState } from "react";
import { Slide } from "./Slide";
// import { css, jsx } from "@emotion/core";
import { SliderContent } from "./SliderContent";

const images = [
  "../../../../assets/img/slider1.jpg",
  "../../../../assets/img/slider2.jpg",
  "../../../../assets/img/slider3.jpg",
];
const Slider = () => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <div>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {images.map((slide) => (
          <Slide key={slide} content={slide} />
        ))}
      </SliderContent>
    </div>
  );
};

// const SliderCSS = css`
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   margin: 0 auto;
//   overflow: hidden;
// `;
export default Slider;
