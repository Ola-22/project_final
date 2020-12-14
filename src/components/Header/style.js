import styled from "styled-components";

export const Menu = styled.div`
  @font-face {
    font-family: "Roboto";
    src: url("../../RobotoCondensed-BoldItalic.ttf");
  }
  position: absolute;
  width: 86%;
  z-index: 1000;
  margin-left: 7%;
  padding: 25px 0;
  transition: all 0.4s ease-out;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  line-height: 28px;
  font-family: "Assistant";
`;
export const Logo = styled.div`
  float: left;
  margin-left: 30px;
  margin-top: 10px;
`;

export const ListRight = styled.div`
  float: right;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  color: #4c4c4c;
`;
export const ListLi = styled.li`
  list-style-type: none;
  display: inline-block;
  position: relative;
  margin: 0;
  color: #4c4c4c;
  text-decoration: none;
  line-height: 16px;
  padding: 14px 20px 14px 20px;
  font-weight: 400;
  font-size: 16px;
  font-family: "Roboto";
`;

export const LinkMenu = styled.a`
  color: ${(props) => (props.ground ? "black" : "#fff !important")};
  background-color: ${(props) => (props.ground ? "#fff" : "#d7a274")};
  border: ${(props) => (props.ground ? "1px solid #808b98" : "none")};
  font-family: "Roboto";
  text-transform: uppercase;
  border-radius: 100px;
  font-weight: 700 !important;
  padding: ${(props) => (props.element ? "15px 30px" : "15px 45px")};
  margin-right: 25px !important;
  text-decoration: none;
  outline: none;
  font-size: 16px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "white" : "#000")};
    color: ${(props) => (props.colorBtn ? "#000 !important" : "white")};
  }
`;
