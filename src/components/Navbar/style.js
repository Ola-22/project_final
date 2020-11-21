import styled from "styled-components";

export const Navbar = styled.nav`
  @font-face {
    font-family: Assistant;
    src: url(../../Assistant-Regular.ttf);
  }
  width: 100%;
  display: flex;
  font-size: 16px;
  background-color: rgba(27, 27, 27, 1);
  color: white;
  padding: 15px 0;
  flex-wrap: wrap;
  font-family: "Assistant";
  flex-direction: row;
`;

export const ItemNav = styled.div`
  margin-left: 30px;
  &:first-child {
    margin-left: 90px;
  }
`;
export const NavOne = styled.div`
  float: left;
`;
export const NavTwo = styled.div`
  float: right;
  margin-left: 250px;
`;

export const Link = styled.a`
  padding: 5px 11px 5px 0;
  line-height: 17px;
  &:first-of-type {
    font-size: 14px;
  }
`;
export const Social = styled.div`
  // float: right;
  position: relative;
`;

export const Fontawesome = styled.a`
  margin-left: 22px;
  color: white;
  font-size: 14px;
`;
