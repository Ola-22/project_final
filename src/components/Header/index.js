import React from "react";
import * as S from "./style";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Rooms } from "../../pages/Rooms";
import { Services } from "../../pages/Services";
import { Tested } from "../../pages/Tested";
import { Contact } from "../../pages/Contact";
// import { Navbar } from "./components/Navbar";
import logo from "../../assets/img/logo.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
export function Header() {
  return (
    <div className="head">
      <Router>
        <S.Menu>
          <S.Logo>
            <img src={logo} alt="img" />
          </S.Logo>
          <S.ListRight>
            <S.List>
              <S.ListLi>
                <NavLink to="/">Home</NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/about" style={{ color: "#4c4c4c" }}>
                  About
                </NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Rooms" style={{ color: "#4c4c4c" }}>
                  Rooms
                </NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Services">Services</NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Tested">Tested</NavLink>
              </S.ListLi>
              <S.ListLi>
                <NavLink to="/Contact">Contact</NavLink>
              </S.ListLi>
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
          <Route path="/">
            <Home />
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
        </Switch>
      </Router>
    </div>
  );
}
