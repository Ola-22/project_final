import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  /* display: inline; */
  /* margin-top: 10px; */
  width: 86%;
  /* top: 10%; */
  z-index: 1000;
  margin-left: 7%;
  padding: 25px 0;
  background: rgba(255, 255, 255, 1);
`;
export const Logo = styled.div`
  float: left;
  margin-left: 30px;
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
`;
export const ALink = styled.a`
  color: #4c4c4c;
`;

export const shuffleImg = styled.img`
  width: 100px;
  height: 100px;
`;
