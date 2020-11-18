import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
// import "./style.css";
import * as S from "./style";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export function Navbar() {
  return (
    <S.Navbar>
      <S.NavOne>
        <S.ItemNav>
          <S.Link>
            <FontAwesomeIcon className="left_font" icon={faMapMarkerAlt} />
          </S.Link>
          <S.Link>
            <span>E102 Lorem Ben Street, London, United Kingdom</span>
          </S.Link>
        </S.ItemNav>
      </S.NavOne>
      <S.ItemNav>
        <S.Link>
          <FontAwesomeIcon className="left_font" icon={faEnvelope} />
        </S.Link>
        <S.Link>
          <span>info@sitename.com</span>
        </S.Link>
      </S.ItemNav>
      <S.ItemNav>
        <S.Link>
          <FontAwesomeIcon className="left_font" icon={faPhoneAlt} />
        </S.Link>
        <S.Link>
          <span>+12 8888 6666</span>
        </S.Link>
      </S.ItemNav>

      <S.NavTwo>
        <S.Social>
          <S.Fontawesome href="http://facebook.com">
            <FontAwesomeIcon className="fontawsome" icon={faFacebookF} />
          </S.Fontawesome>
          <S.Fontawesome href="http://twitter.com">
            <FontAwesomeIcon className="fontawesome" icon={faTwitter} />
          </S.Fontawesome>
          <S.Fontawesome href="http://google.com">
            <FontAwesomeIcon className="fontawsome" icon={faGooglePlusG} />
          </S.Fontawesome>
          <S.Fontawesome href="http://facebook.com">
            <FontAwesomeIcon className="fontawsome" icon={faLinkedinIn} />
          </S.Fontawesome>
          <S.Fontawesome href="http://facebook.com">
            <FontAwesomeIcon className="fontawsome" icon={faPinterest} />
          </S.Fontawesome>
        </S.Social>
      </S.NavTwo>
    </S.Navbar>
  );
}
