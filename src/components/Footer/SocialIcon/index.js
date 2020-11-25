// import React from "react";
// import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
// import "./style";

export function SocialIcon() {
  return (
    <div>
      {/* <Link to="http://www.facebook.com" className="facebook" /> */}
      <a className="icon" href="http://www.facebook.com">
        <FontAwesomeIcon icon={faFacebookF} className="social" />
      </a>
      <a className="icon" href="https://www.google.com/">
        <FontAwesomeIcon icon={faGooglePlusG} className="social" />
      </a>
      <a className="icon" href="https://www.twitter.com/">
        <FontAwesomeIcon icon={faTwitter} className="social" />
      </a>
      <a className="icon" href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} className="social" />
      </a>
      <a className="icon" href="https://www.youtube.com/">
        <FontAwesomeIcon icon={faYoutube} className="social" />
      </a>
      <a className="icon" href="https://www.linkedin.com/">
        <FontAwesomeIcon icon={faLinkedinIn} className="social" />
      </a>
    </div>
  );
}
