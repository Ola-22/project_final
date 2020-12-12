import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const Scroll = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (!show && window.pageYOffset > 800) {
      setShow(true);
    } else if (show && window.pageYOffset <= 800) {
      setShow(false);
    }
  };

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: `smooth` });
  };
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
  return (
    <div>
      {show && (
        <a onClick={handleClick} className="scrolBtn">
          <FontAwesomeIcon icon={faAngleUp} className="topBtn" />
        </a>
      )}
    </div>
  );
};
