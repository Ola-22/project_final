import React from "react";
export function Arrows({ nextQuote, prevQuote }) {
  return (
    <>
      <a onClick={prevQuote} className="prev" id="prev">
        &#10094;
      </a>
      <a onClick={nextQuote} className="next" id="next">
        &#10095;
      </a>
    </>
  );
}
