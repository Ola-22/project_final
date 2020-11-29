import styled from "styled-components";

export const TitleRes = styled.h2`
  color: #222;
  font-family: Sans-serif;
  font-size: 38px;
  font-weight: 700;
  margin-left: 34%;
  @media only screen and (max-width: 600px) {
    margin-left: 40px;
    width: 90%;
  }
  &:after {
    background-color: #d7a274;
    content: "";
    display: block;
    height: 2px;
    margin-left: 21%;
    margin-top: 3%;
    /* margin: 5px auto; */
    width: 4.4%;
    position: relative;
  }
`;

export const ContentRes = styled.p`
  color: rgb(68, 68, 68);
  /* color: #444; */
  font-family: "Assistant", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 30px;
  width: 67%;
  line-height: 1.7;
  margin-left: 19%;
  text-align: center;
  @media only screen and (max-width: 600px) {
    margin-left: 5px;
    width: 100%;
    font-size: 14px;
  }
`;
