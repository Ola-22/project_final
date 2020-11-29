import React, { useState } from "react";
import * as S from "./style";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Rooms } from "../../pages/Rooms";
import { Services } from "../../pages/Services";
import { Tested } from "../../pages/Tested";
import { Contact } from "../../pages/Contact";
import { Reservation } from "../../pages/Reservation";
import logo from "../../assets/img/logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

export function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="head">
      <Router>
        <S.Menu>
          <S.Logo>
            <img src={logo} alt="img" />
          </S.Logo>
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={() => {
              setOpen(!isOpen);
            }}
          />
          <S.ListRight className={`collapsed ${isOpen ? "is-expanded" : ""}`}>
            <S.List>
              <S.ListLi>
                <NavLink to="/" className="menu-header" exact>
                  Home
                </NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/about" className="menu-header">
                  About Us
                </NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Rooms" className="menu-header">
                  Rooms
                </NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Services" className="menu-header">
                  Services
                </NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Tested" className="menu-header">
                  RTL Tested
                </NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Contact" className="menu-header">
                  Contact
                </NavLink>
              </S.ListLi>
              <Link to="/Reservation">
                <S.Linkmenu element>Book now!</S.Linkmenu>
              </Link>
            </S.List>
          </S.ListRight>
        </S.Menu>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Rooms">
            <Rooms />
          </Route>

          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Tested">
            <Tested />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Reservation">
            <Reservation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
