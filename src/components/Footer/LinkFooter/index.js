// import React from "react";
// import * as S from "./style";
import { Link } from "react-router-dom";

export function LinkFooter() {
  return (
    <div className="mainLink">
      <Link to="/" className="footer">
        Home
      </Link>
      <Link to="/about" className="footer">
        About Us
      </Link>

      <Link to="/Services" className="footer">
        Services
      </Link>
      <Link to="/" className="footer">
        Blog
      </Link>

      <Link to="/Contact" className="footer">
        Contact
      </Link>
    </div>
  );
}
