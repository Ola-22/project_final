import React from "react";

export function Slide({ quote }) {
  return (
    <div className="mySlides">
      <q>{quote.quote}</q>
      <p className="author">&mdash;{quote.author}</p>
    </div>
  );
}
