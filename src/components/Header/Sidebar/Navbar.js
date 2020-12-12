import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <Link to="#">
        <FontAwesomeIcon icon={faBars} onClick={showSidebar} className="bar" />
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FontAwesomeIcon icon={faTimes} />
            </Link>
            <div>
              <FontAwesomeIcon icon={faBars} className="bar-icon" />
            </div>
          </li>
          <div className="menu-sidebar">
            <Link to="/" className="side-link">
              Home
            </Link>
            <Link to="/About" className="side-link">
              About Us
            </Link>
            <Link to="/Rooms" className="side-link">
              Rooms
            </Link>
            <Link to="/Services" className="side-link">
              Services
            </Link>
            <Link to="/Tested" className="side-link">
              RTL Tested
            </Link>
            <Link to="/Contact" className="side-link">
              Contact
            </Link>
            <Link to="/Reservation" className="side-link">
              Book now!
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
