import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
  position: absolute;
  width: 86%;
  z-index: 1000;
  margin-left: 7%;
  padding: 25px 0;
  /* transition: all 0.4s ease-out; */
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  height: auto;
  font-family: "Assistant";
  @media (min-width: 160px) and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    padding: 15px;
  }
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
  @media (min-width: 160px) and (max-width: 600px) {
    padding: 20px 100px;
    display: none;
  }
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
  @media (min-width: 160px) and (max-width: 600px) {
    width: 100%;
    margin-left: 80%;
    display: block;
    background-color: whitesmoke;
    color: #282828;
  }
`;

export const MenuBook = styled(Link)`
  color: ${(props) => (props.groundcolor ? "black" : "#fff !important")};
  background-color: ${(props) => (props.groundcolor ? "#fff" : "#d7a274")};
  border: ${(props) => (props.groundcolor ? "1px solid #808b98" : "none")};
  font-family: "Roboto";
  text-transform: uppercase;
  border-radius: 100px;
  font-weight: 700 !important;
  padding: ${(props) => (props.element ? "15px 30px" : "15px 45px")};
  margin-right: 25px !important;
  text-decoration: none;
  outline: none;
  font-size: 16px;
  /* transition: all 0.2s; */
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "white" : "#000")};
    color: ${(props) => (props.colorbtn ? "#000 !important" : "white")};
  }
`;
