import React from "react";
import * as S from "./style";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Rooms } from "../../pages/Rooms";
import { Services } from "../../pages/Services";
import { Tested } from "../../pages/Tested";
import { Contact } from "../../pages/Contact";
import { Reservation } from "../../pages/Reservation";
import { Scroll } from "../Scroll";
import logo from "../../assets/img/logo.png";
import "./Sidebar/style.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Sidebar from "./Sidebar";

export function Header() {
  return (
    <div className="head">
      <Router>
        <S.Menu>
          <S.Logo>
            <img src={logo} alt="img" />
          </S.Logo>
          <Sidebar />
          <S.ListRight>
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
              <S.MenuBook to="/Reservation" element="true">
                Book now!
              </S.MenuBook>
            </S.List>
          </S.ListRight>
        </S.Menu>
        <Switch>
          <Route path="/about">
            <Scroll />
            <About />
          </Route>
          <Route path="/Rooms">
            <Scroll />
            <Rooms />
          </Route>

          <Route path="/Services">
            <Scroll />
            <Services />
          </Route>
          <Route path="/Tested">
            <Scroll />
            <Tested />
          </Route>
          <Route path="/Contact">
            <Scroll />
            <Contact />
          </Route>
          <Route path="/Reservation">
            <Scroll />
            <Reservation />
          </Route>
          <Route path="/">
            <Scroll />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
